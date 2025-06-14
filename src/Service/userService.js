import { ref, push, set, onValue, update, remove } from "firebase/database";
import { db } from "../firebase";

/**
 * Service để thao tác với node "users" trong Realtime Database
 */
class UserService {
  constructor() {
    this.usersRef = ref(db, "users");
  }

  // Tạo user mới, trả về Promise
  addUser({ name, email, password }) {
    const newUserRef = push(this.usersRef);
    return set(newUserRef, { name, email, password });
  }

  // Lắng nghe realtime tất cả users
  onUsersChanged(callback) {
    return onValue(this.usersRef, snapshot => {
      const data = snapshot.val() || {};
      callback(data);
    });
  }

  // Cập nhật user theo key
  updateUser(key, newData) {
    const userRef = ref(db, `users/${key}`);
    return update(userRef, newData);
  }

  // Xóa user theo key
  deleteUser(key) {
    const userRef = ref(db, `users/${key}`);
    return remove(userRef);
  }
}

export default new UserService();

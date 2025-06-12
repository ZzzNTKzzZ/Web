// src/utils/ResponsiveNavbar.js
export default class ResponsiveNavbar {
  constructor({ navToggleRef, menuLeftRef, logoRef, headerRef }) {
    this.navToggle = navToggleRef.current;
    this.menuLeft = menuLeftRef.current;
    this.logo = logoRef.current;
    this.header = headerRef.current;

    this.lastScrollTop = 0;
    this.delta = 5;
    this.didScroll = false;
    this.navbarHeight = this.header?.offsetHeight || 0;

    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.scrollCheckInterval = null;
  }

  init() {
    if (!this.navToggle || !this.menuLeft || !this.logo || !this.header) return;

    // Logo click scroll to top
    this.logo.addEventListener('click', this.scrollToTop.bind(this));

    // Anchor smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', this.scrollToSection.bind(this));
    });

    // Toggle nav
    this.navToggle.addEventListener('click', () => {
      this.navToggle.classList.toggle('open');
      this.menuLeft.classList.toggle('collapse');
    });

    // Collapse on click
    this.menuLeft.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
      });
    });

    // Scroll handling
    window.addEventListener('scroll', this.handleScrollEvent);
    this.scrollCheckInterval = setInterval(() => {
      if (this.didScroll) {
        this.handleHasScrolled();
        this.didScroll = false;
      }
    }, 250);
  }

  destroy() {
    clearInterval(this.scrollCheckInterval);
    window.removeEventListener('scroll', this.handleScrollEvent);
  }

  handleScrollEvent() {
    this.didScroll = true;
  }

  handleHasScrolled() {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(this.lastScrollTop - st) <= this.delta) return;

    if (st > this.lastScrollTop && st > this.navbarHeight) {
      this.header.classList.remove('show-nav');
      this.header.classList.add('hide-nav');
      this.closeMenu();
    } else {
      if (st + window.innerHeight < document.body.scrollHeight) {
        this.header.classList.remove('hide-nav');
        this.header.classList.add('show-nav');
      }
    }

    this.lastScrollTop = st;
  }

  scrollToTop(e) {
    e.preventDefault();
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(e) {
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }

  closeMenu() {
    this.navToggle.classList.remove('open');
    this.menuLeft.classList.remove('collapse');
  }
}

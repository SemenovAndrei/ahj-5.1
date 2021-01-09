export default class Popover {
  /**
   * Init
   */
  init() {
    this.addElements();
  }

  /**
   * Add all elements
   */
  addElements() {
    this.addPopover();
  }

  /**
   * Add popover
   */
  addPopover() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');
    this.addPopoverMarkup();
  }

  /**
   * Add markup for popover
   */
  addPopoverMarkup() {
    this.popover.innerHTML = `
    <h3 class="popover-title">Popover Title</h3>
    <div class="popover-content">Popover Some Content</div>
    `;
  }

  /**
   * @return this.popover
   */
  getPopover() {
    this.init();

    return this.popover;
  }
}

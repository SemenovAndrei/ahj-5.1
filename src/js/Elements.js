/* eslint-disable prefer-destructuring */
/**
 * @class Elements
 */
export default class Elements {
  constructor(popover) {
    this.popover = popover.getPopover();
    this.body = document.getElementsByTagName('body')[0];
  }

  /**
   * Init
   */
  init() {
    this.addElements();
    this.body.insertAdjacentElement('afterbegin', this.container);
    this.container.insertAdjacentElement('afterbegin', this.content);
    // this.container.insertAdjacentElement('afterbegin', this.popover.popover);
  }

  /**
   * Add all elements
   */
  addElements() {
    this.addContainer();
    this.addContent();
    // this.addPopover();
  }

  /**
   * Add container
   */
  addContainer() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
  }

  /**
   * Add content
   */
  addContent() {
    this.content = document.createElement('div');
    this.content.classList.add('content');
    this.addContentMarkup();
  }

  /**
   * Add markup for content
   */
  addContentMarkup() {
    this.content.innerHTML = `
    <div class="wrapper">
      <button class="button button-top">Click Me</button>
      <div class="tooltip"></div>
    </div>
    <div class="inner">
      <div class="wrapper">
        <button class="button button-left">Click Me</button>
        <div class="tooltip"></div>
      </div>
      <div class="wrapper">
        <button class="button button-right">Click Me</button>
        <div class="tooltip"></div>
      </div>
    </div>
    <div class="wrapper">
      <button class="button button-bottom">Click Me</button>
      <div class="tooltip"></div>
    </div>
    `;
  }
}

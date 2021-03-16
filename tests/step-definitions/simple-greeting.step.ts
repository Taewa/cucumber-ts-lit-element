import { binding, given, then, when } from 'cucumber-tsflow';
import { fixture, html } from '@open-wc/testing';
import '../../src/SimpleGreeting.js';

@binding()
export class SimpleGreetingSteps {
  private element;

  @given('There is SimpleGreeting component')
  public async initComponent() {
    this.element = await fixture(
      html`
        <simple-greeting></simple-greeting>
      `,
    );
  }

  @when(/Start rendering/)
  public renderComponent() {
    this.element.render();
  }

  @then(/Name is rendered/)
  public assertResult() {

  }
}
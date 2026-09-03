import type { xLocator } from "../../framework/core/xLocator";
import { xComponent } from "../../framework/core/xComponent";

export class PaginationComponent extends xComponent {
  readonly current = this.$("li.active");
  readonly items = this.$("li");
  readonly next = this.$("li.next a, a[rel='next']");
  readonly previous = this.$("li.previous a, a[rel='prev']");

  itemByNumber(number: number): xLocator {
    return this.root.locator("li").filter({ hasText: String(number) }).first() as xLocator;
  }

  async goTo(number: number): Promise<void> {
    await this.itemByNumber(number).click();
  }

  async goToNext(): Promise<void> {
    await this.next.click();
  }

  async goToPrevious(): Promise<void> {
    await this.previous.click();
  }
}
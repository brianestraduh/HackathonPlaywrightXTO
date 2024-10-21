import { BasePage } from "../BasePage";
import { Page } from "@playwright/test";
import { Textfield } from "../../fixtures/components/Textfield";
import { expect } from "@playwright/test";
import { MockarooService } from "../../data/MockarooService";
import { OrganizationFormData } from "./Organizations.model";

export class OrganizationCreatePage extends BasePage {
  private name: Textfield;
  private code: Textfield;

  constructor(page: Page) {
    super(page);
    this.name = new Textfield(page, "#OrganizationCreateNameField");
    this.code = new Textfield(page, "#OrganizationCreateCodeField");
  }

  async fillForm(name: string, code: string) {
    await this.name.fill("Brian Org");
    const nameValue = await this.page.inputValue(
      "#OrganizationCreateNameField"
    );
    expect(nameValue).toBe(name);
    await this.code.fill("BGE");

    const codeValue = await this.page.inputValue(
      "#OrganizationCreateCodeField"
    );

    expect(codeValue).toBe(code);
  }
}

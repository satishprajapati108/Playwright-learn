import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

type Label = "All" | "Draft" | "SetUp" | "ScoringOn";

export class JobFilter extends BasePage{
    readonly All = this.page.getByTestId('jobs-segment-tab-all');
    readonly Draft = this.page.getByTestId('jobs-segment-tab-draft');
    readonly SetUp = this.page.getByTestId('jobs-segment-tab-needs-setup');
    readonly ScoringOn = this.page.getByTestId('jobs-segment-tab-scoring-on');

    

    async switchTab(tab :Label){
        await this[tab].click();
    }

    
}
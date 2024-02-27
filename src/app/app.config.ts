import { provideHttpClient, withFetch } from "@angular/common/http";

export const appconfig = {
    provider:[provideHttpClient(withFetch())]
};
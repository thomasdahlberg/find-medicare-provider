# Find Medicare Providers

## Overview
*Find Medicare Providers (FMP)* is a simple, intuitive web application for finding healthcare providers in your area that accept Medicare insurance.
The web app is designed with elderly end-users in mind and offers searchability of providers by specialty in a 100 mile radius of the user.

## How It Works
- Upon loading of the webpage, *FMP* finds the location of the end-user employing an ISP location-tracker API that caches the longitude and latitude coordinates of the ISP
so that they can be used as location data when the user searches for provider information.

- After the user selects a healthcare provider specialty using the dropdown selector and then clicks `Find Your Providers`, an eventlistener triggers
a second API, https://api.betterdoctor.com which searches for doctors based on the user's cached location and provider specialty data.

- After the provider API data is retrieved, it undergoes a data cleaning/validation that removes provider objects that do not have specialty data associated with them
and deduplicates specific provider objects that have the same *National Provider Identifier (NPI)*. This data cleansing process prevents duplicate provider rows that may be obnoxious to end-users.

- Finally, the clean healthcare provider data is formatted and delivered to the document as a list of providers, their specialties, and their contact info.
  - Users may search for all Medicare providers without filtering by specialty by simply clicking `Find Your Providers` or selecting `All Medicare Providers` from the specialty dropdown menu and then clicking `Find Your Providers`.
  -If a user's query yields no providers (i.e. no provider objects for a given specialty), the user is alerted that there are no providers of that specialty in the area and the document will be formatted with provider data of General Practictions in the user's vicinity, namely `Family Medicine` and `Internal Medicine` providers.

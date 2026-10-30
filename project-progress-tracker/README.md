# Project Progress Tracker

Angular and Express application for Module 8 and Lab 4. This project was created from the supplied Module 8 guide; it does not contain earlier module components that were not available.

## Requirements
Node.js 24.15 or newer in the Node 24 series, and npm. Angular 22 is used to match the class guide.

## Run the app
Open a terminal in this folder:
```sh
npm ci
npm start
```
Open a second terminal in this folder:
```sh
cd server
npm ci
npm start
```
Keep both terminals running. Open http://localhost:4200 in Chrome. Express runs at http://localhost:8000.

## Lab 4
GET /milestones returns the three predefined records from the guide. The Angular component calls MilestoneService, and its async pipe displays the response.

Enter **Complete Lab 4** and select **In Progress**, then click **Submit Milestone**. POST /milestones logs the name and status in the Express terminal and returns a confirmation message. The new milestone is not stored and does not change the original list, as required by the assignment.

## Required screenshots
Keep the browser address bar visible in every browser screenshot.
1. Angular page showing all three records.
2. Chrome DevTools Network tab showing GET /milestones, status and JSON response. Open DevTools before refreshing; filter Fetch/XHR and select milestones.
3. Angular form after submitting Complete Lab 4 / In Progress, with the confirmation visible.
4. Chrome DevTools showing POST /milestones. Capture Headers (method and status), Payload, and Response as separate screenshots if necessary.
5. Express terminal showing the received name and status.

The GitHub repository link belongs in the report and in the D2L submission comment.

## Build
```sh
npm run build
```

## Main files
src/app/milestone.ts: HTTP service.
src/app/milestone-api/: milestone list and Material reactive form.
server/server.js: GET and POST endpoints.

References: supplied Module 8 guide, https://angular.dev/guide/http/setup and https://expressjs.com/en/api/.

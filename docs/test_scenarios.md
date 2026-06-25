TC-001
Title: Verify successful submission using a valid suggestion
Preconditions:
User is logged in as test123@gmail.com
User has navigated to the Autocomplete Form
Test Data:
agile methodology
Test Steps:
Open the Autocomplete Form.
Click on the input field.
Select "agile methodology" from the suggestion list.
Click the Next button.
Expected Results:
API request is triggered.
API returns HTTP 200 status code.
Success message is displayed.
Response is persisted successfully in the backend.

TC-002
Title: Verify invalid input cannot be submitted
Preconditions:
User is logged in.
User is on the Autocomplete Form page.
Test Data:
invalid_value
Test Steps:
Enter "invalid_value" in the input field.
Click Next.
Expected Results:
Error message is displayed.
Form submission is blocked.
No record is created in the backend.

TC-003
Title: Verify Prefix Match filtering displays matching suggestions
Preconditions:
Prefix Match mode is enabled.
Test Data:
agile
Test Steps:
Click on the input field.
Enter "agile".
Expected Results:
"agile methodology" is displayed.
"agile methodology process" is displayed.
"agile methodology process testing" is displayed.

TC-004
Title: Verify Prefix Match filtering hides non-matching suggestions
Preconditions:
Prefix Match mode is enabled.
Test Data:
methodology
Test Steps:
Enter "methodology" in the input field.
Expected Results:
No suggestions are displayed because none start with "methodology".

TC-005
Title: Verify Match Anywhere filtering functionality
Preconditions:
Match Anywhere configuration is enabled.
Test Data:
methodology
Test Steps:
Enter "methodology" in the input field.
Expected Results:
All three suggestions remain visible.
Suggestions are filtered using Match Anywhere logic.

TC-006
Title: Verify selected suggestion populates the input field
Preconditions:
User is on the form page.
Test Data:
agile methodology
Test Steps:
Click inside the input field.
Select "agile methodology" from the suggestion list.
Expected Results:
Input field is populated with "agile methodology".
No additional characters are appended.

TC-007
Title: Verify locale is stored in IETF BCP 47 format
Preconditions:
Successful form submission completed.
Test Data:
Expected locale: en-IN
Test Steps:
Select a valid suggestion.
Submit the form.
Perform a GET request for the saved record.
Verify the locale field.
Expected Results:
locale field is present.
locale follows IETF BCP 47 format.
locale value is stored as en-IN.

TC-008
Title: Verify completed field is stored as Boolean
Preconditions:
Successful form submission completed.
Test Data:
completed = true
Test Steps:
Submit the form using a valid suggestion.
Perform a GET request for the saved record.
Verify the completed field.
Expected Results:
completed field exists.
Value is stored as Boolean.
Value equals true.
Value is not stored as a String.

TC-009
Title: Verify start_date and end_date are stored in user's local timezone
Preconditions:
User location is India (IST).
Test Data:
Timezone: UTC+05:30
Test Steps:
Open the form.
Wait for a few seconds.
Select a valid suggestion.
Submit the form.
Perform a GET request for the saved record.
Expected Results:
start_date is captured correctly.
end_date is captured correctly.
Both timestamps are stored in IST/local timezone.
Timestamps are not stored in UTC format.

TC-010
Title: Verify suggestion_list contains only matching suggestions
Preconditions:
Successful form submission completed.
Test Data:
agile methodology
Test Steps:
Select "agile methodology".
Submit the form.
Perform a GET request.
Verify the suggestion_list field.
Expected Results:
suggestion_list contains only suggestions relevant to the selected value.
Unrelated suggestions are not included.

TC-011
Title: Verify logged-in user details are persisted correctly
Preconditions:
User logged in as test123@gmail.com
Test Data:
Email: test123@gmail.com
Test Steps:
Select a valid suggestion.
Submit the form.
Perform a GET request.
Verify account details.
Expected Results:
account_email equals test123@gmail.com.
account_id is populated.
Stored account details belong to the logged-in user.

TC-012
Title: Verify duplicate submission is prevented
Preconditions:
User is on the Autocomplete Form page.
Test Data:
agile methodology
Test Steps:
Select a valid suggestion.
Double-click the Next button quickly.
Expected Results:
Only one API request is processed.
Only one record is created in the backend.
Success message is displayed only once.
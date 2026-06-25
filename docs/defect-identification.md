Defect Analysis – FR-05 Backend Data Contract Validation
Response Received:

{
  "account_id": "98765",
  "account_email": "test123@gmail.com",
  "start_date": "2024-03-15T10:30:00Z",
  "end_date": "2024-03-15T10:32:00Z",
  "locale": "en",
  "text": "agile methodology",
  "suggestion_list": "agile methodology, agile methodology process, agile methodology process testing",
  "completed": "true"
}

-------------------------

Defect #1: start_date stored in UTC instead of Local Time | High

Requirement:
start_date should contain the timestamp in the user's local time when they reached the form.
Actual:
2024-03-15T10:30:00Z
Issue:
The value is stored in UTC (indicated by 'Z') instead of the user's local timezone (IST, UTC+05:30).


Defect #2: end_date stored in UTC instead of Local Time | High

Requirement:
end_date should contain the timestamp in the user's local time when they clicked Next.
Actual:
2024-03-15T10:32:00Z
Issue:
The value is stored in UTC instead of the user's local timezone (IST, UTC+05:30).

Defect #3: locale does not follow IETF BCP 47 format | Medium

Requirement:
Locale should be stored in IETF BCP 47 format.
Example: en-IN
Actual:
en
Issue:
The locale contains only the language code and is missing the region code (IN).
Expected:
en-IN

Defect #4: completed field has incorrect data type | High

Requirement:
completed should be a Boolean value representing upload status.
Actual:
"true"
Issue:
The value is stored as a String instead of a Boolean.
Expected:
true

Defect #5: suggestion_list may not meet business requirement | Medium

Requirement:
suggestion_list should contain suggestions matching the value entered or selected.

Selected Value:
agile methodology
Actual:
agile methodology,
agile methodology process,
agile methodology process testing
Issue:
The response contains all available suggestions. Based on the requirement, only the selected value or relevant matching suggestions may be expected.
Status:
Potential Defect / Requirement Clarification Required

Summary
Total Confirmed Defects: 4
1. start_date stored in UTC instead of local time.
2. end_date stored in UTC instead of local time.
3. locale not in valid IETF BCP 47 format.
4. completed stored as String instead of Boolean.

Potential Defect / Clarification Required: 1

5. suggestion_list contains all suggestions instead of clearly storing only matching/selected suggestions.
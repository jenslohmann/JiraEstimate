# JiraEstimate
Sums up all '##h##m', '##.##h', '##h', and '##m' estimates in the description for a total estimate

This macro works together with a small part of the JIRA issue tracker by Atlassian.

Basically, when creating or editing an issue, if you need a total estimate for the issue and have ad-hoc subtasks listed as lines within the description, all ending in e.g. "4h" for 4 hours, "4h30m" for 4 hours 30 minutes, or perhaps "4.5h" for 4 hours 30 minutes, then this macro will sum up these subtasks and offer to enter the total into the estimate field of the issue.

Example:

-----

>This is a small task that is so small that I will not create separate tasks for each. The idea is:
>
>[... text describing the basic idea ...]
>
>Design: 3h
>
>Development: 12h
>
>Test: 3h30m

-----

The total will then be 18h30m (or 1110 minutes) which this macro will calculate for you and offer to enter into the estimate field.
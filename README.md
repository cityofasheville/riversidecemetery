# Riverside Cemetery website


Updates in 08/2025:
The content of the riverside website has been moved to the riverside cemetery ashevillenc.gov page. The old page redirects to .gov page.
There are two s3 buckets; one associated with the old page, that handles the redirect, and a second bucket for the riverside data.
This repo is no longer being maintained. 



https://riversidecemetery.ashevillenc.gov/

Old site hosted on Github will redirect to new site:
http://cityofasheville.github.io/riversidecemetery/Main/




- Data for "Records" datatable is hard coded in the file Main/data/gravedata.csv. 
- A Bedrock job reloads the data nightly.
- The site is deployed to the S3 bucket riversidecemetery.
- To test locally, run ``` npx serve``` from the root directory.

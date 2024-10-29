# Riverside Cemetery website

https://riversidecemetery.ashevillenc.gov/

Old site hosted on Github will redirect to new site:
http://cityofasheville.github.io/riversidecemetery/Main/




- Data for "Records" datatable is hard coded in the file Main/data/gravedata.csv. 
- A Bedrock job reloads the data nightly.
- The site is deployed to the S3 bucket riversidecemetery.
- To test locally, run ``` npx serve``` from the root directory.
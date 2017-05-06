{
    "quiz": {
        "name": "Costing",
        "logo" : "assets/img/S3.png"
    },
    "questions": [
         {
        "Id": 1,
        "Name": "You need a persistent and durable storage to trace call activity of an IVR (Interactive Voice Response) system. Call duration is mostly in the 2-3 minutes timeframe. Each traced call can be either active or terminated. An external application needs to know each minute the list of currently active calls. Usually there are a few calls/second, but once per month there is a periodic peak up to 1000 calls/second for a few hours. The system is open 24/7 and any downtime should be avoided. Historical data is periodically archived to files. Cost saving is a priority for this project. What database implementation would better fit this scenario, keeping costs as low as possible?" , 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use DynamoDB with a 'Calls' table and a Global Secondary Index on a 'State' attribute that can equal to 'active' or 'terminated'. In this way the Global Secondary Index can be used for all items in the table.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use RDS Multi-AZ with a 'CALLS'' table and an indexed 'STATE' field that can be equal to 'ACTIVE' or 'TERMINATED'. In this way the SQL query is optimized by the use of the Index.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use RDS Multi-AZ with two tables, one for 'ACTIVE_CALLS' and one for 'TERMINATED_CALLS'. In this way the 'ACTIVE_CALLS' table is always small and effective to access.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use DynamoDB with a 'Calls' table and a Global Secondary Index on a 'IsActive' attribute that is present for active calls only. In this way the Global Secondary Index is sparse and more effective.", "IsAnswer": true }],
            "Explanation":"Q: Can a global secondary index key be defined on non-unique attributes? Yes. Unlike the primary key on a table, a GSI index does not require the indexed attributes to be unique. Q: Are GSI key attributes required in all items of a DynamoDB table? No. GSIs are sparse indexes. Unlike the requirement of having a primary key, an item in a DynamoDB table does not have to contain any of the GSI keys. If a GSI key has both hash and range elements, and a table item omits either of them, then that item will not be indexed by the corresponding GSI. In such cases, a GSI can be very useful in efficiently locating items that have an uncommon attribute.",
            "Ref":"https://aws.amazon.com/dynamodb/faqs/"

    } ,
     
      {
        "Id": 2,
        "Name": "Your department creates regular analytics reports from your company's log files. All log data is collected in Amazon S3 and processed by daily Amazon Elastic MapReduce (EMR) jobs that generate daily PDF reports and aggregated tables in .csv format for an Amazon Redshift data warehouse. Your CFO requests that you optimize the cost structure for this system. Which of the following alternatives will lower costs without compromising average performance of the system or data integrity for the raw data?", 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use reduced redundancy storage (RRS) for all data In S3. Use a combination of Spot Instances and Reserved Instances for Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use reduced redundancy storage (RRS) for PDF and .csv data in S3. Add Spot Instances to EMR jobs. Use Spot Instances for Amazon Redshift.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use reduced redundancy storage (RRS) for PDF and .csv data In Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Use reduced redundancy storage (RRS) for all data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.", "IsAnswer": false }],
            "Explanation":"Reserved Instances (a.k.a. Reserved Nodes) are appropriate for steady-state production workloads, and offer significant discounts over On-Demand pricing. If you are running EMR in production you should specify an AMI version, Hive version, Pig version, etc. to make sure the version does not change unexpectedly (e.g. when EMR later adds support for a newer version). If your cluster is mission critical, only use Spot instances for task nodes because if the Spot price increases you may lose the instances. In development, use logging and enable debugging to spot and correct errors faster. If you are using GZIP, keep your file size to 1–2 GB because GZIP files cannot be split. Click here to download the white paper on Amazon EMR best practices.",
            "Ref":"https://aws.amazon.com/elasticmapreduce/faqs/"

    } ,
      {
        "Id": 3,
        "Name": "Your website is serving on-demand training videos to your workforce. Videos are uploaded monthly in high resolution MP4 format. Your workforce is distributed globally, often on the move and using company-provided tablets that require the HTTP Live Streaming (HLS) protocol to watch a video. Your company has no video transcoding expertise and if required you may need to pay for a consultant. How do you implement the most cost-efficient architecture without compromising high availability and quality of video delivery?", 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.", "IsAnswer": false }]    
      } ,

      {
        "Id": 4,
        "Name": "Your firm has uploaded a large amount of aerial image data to S3. In the past, in your on- premises environment, you used a dedicated group of servers to batch process this data and used RabbitMQ, an open source messaging system, to get job information to the servers. Once processed the data would go to tape and be shipped offsite. Your manager told you to stay with the current design, and leverage AWS archival storage and messaging services to minimize cost. Which is correct?", 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use SNS to pass job messages, use CloudWatch alarms to terminate spot worker instances when they become idle. Once data is processed, change the storage class of the S3 object to Glacier.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use SQS for passing job messages, use CloudWatch alarms to terminate EC2 worker instances when they become idle. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Glacier.", "IsAnswer": true }],
            "Explanation":"The question key part to focus on is “and leverage AWS archival storage and messaging services to minimize cost.” For that the storage that is the lowest cost in the answers is Glacier, in addition, the messaging cost is less for SQS then for SNS if they both exceed 1 million transactions which is free. The only answer that satisfies the above two criteria is answer C. Also, there does not seem to be an urgency in speed of messaging therefore SQS satisfies that need. SNS being more real time delivery mechanism."

    }
     ]
}
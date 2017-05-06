{
    "quiz": {
        "name": "Exam 2",
        "logo" : "assets/img/VPC.png"
    },
    "questions": [
    
  
      {
        "Id": 16,
        "Name": "Your customer wishes to deploy an enterprise application to AWS, which will consist of several web servers, several application servers, and a small (50GB) Oracle database. Information is stored both in the database and the filesystems of the various servers. The backup system must support database recovery, whole server and whole disk restores, and individual file restores with a recovery time of no more than two hours. They have chosen to use RDS Oracle as the database. Which backup architecture will meet these requirements?", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Backup RDS using automated daily DB backups. Backup the EC2 Instances using AMIs, and supplement with file-level backup to S3 using traditional enterprise backup software to provide file level restore.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Backup RDS database to S3 using Oracle RMAN. Backup the EC2 instances using AMIs, and supplement with EBS snapshots for individual volume restore.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Backup RDS using a Multi-AZ Deployment. Backup the EC2 instances using AMIs, and supplement by copying filesystem data to S3 to provide file level restore.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Backup RDS using automated daily DB backups. Backup the EC2 instances using EBS snapshots, and supplement with file-level backups to Amazon Glacier using traditional enterprise backup software to provide file level restore.", "IsAnswer": false }],
            "Explanation":"You need to use enterprise backup software to provide file level restore. If your existing backup software does not natively support the AWS cloud, you can use AWS storage gateway products. AWS Storage Gateway is a virtual appliance that provides seamless and secure integration between your data center and the AWS storage infrastructure.",
            "Ref":"https://d0.awsstatic.com/whitepapers/Backup_and_Recovery_Approaches_Using_AWS.pdf"

    },
      {
        "Id": 17,
        "Name": "You have launched an EC2 instance with four (4) 500 GB EBS Provisioned IOPS volumes attached. The EC2 instance is EBS-Optimized and supports 500 Mbps throughput between EC2 and EBS. The four EBS volumes are configured as a single RAID 0 device, and each Provisioned IOPS volume is provisioned with 4,000 IOPS (4,000 16KB reads or writes), for a total of 16,000 random IOPS on the instance. The EC2 instance initially delivers the expected 16,000 IOPS random read and write performance. Sometime later, in order to increase the total random I/O performance of the instance, you add an additional two 500 GB EBS Provisioned IOPS volumes to the RAID. Each volume is provisioned to 4,000 IOPs like the original four, for a total of 24,000 IOPS on the EC2 instance. Monitoring shows that the EC2 instance CPU utilization increased from 50% to 70%, but the total random IOPS measured at the instance level does not increase at all. What is the problem and a valid solution?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The EBS-Optimized throughput limits the total IOPS that can be utilized; use an EBS-Optimized instance that provides larger throughput.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Small block sizes cause performance degradation, limiting the I/O throughput; configure the instance device driver and filesystem to use 64KB blocks to increase throughput.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The standard EBS Instance root volume limits the total IOPS rate; change the instance root volume to also be a 500GB 4,000 Provisioned IOPS volume.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Larger storage volumes support higher Provisioned IOPS rates; increase the provisioned volume storage of each of the 6 EBS volumes to 1TB.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "RAID 0 only scales linearly to about 4 devices; use RAID 0 with 4 EBS Provisioned IOPS volumes, but increase each Provisioned IOPS EBS volume to 6,000 IOPS.", "IsAnswer": false }]

    },
      {
        "Id": 18,
        "Name": "A customer has a 10 GB AWS Direct Connect connection to an AWS region where they have a web application hosted on Amazon Elastic Computer Cloud (EC2). The application has dependencies on an on-premises mainframe database that uses a BASE (Baste Available, Soft state, Eventual consistency) rather than an ACID (Atomicity, Consistency, Isolation, Durability) consistency model. The application is exhibiting undesirable behavior because the database is not able to handle the volume of writes. How can you reduce the load on your on-premises database resources in the most cost-effective way?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Provision an RDS read-replica database on AWS to handle the writes and synchronize the two databases using Data Pipeline.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Modify the application to use DynamoDB to feed an EMR cluster which uses a map function to write to the on-premises database.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Modify the application to write to an Amazon SQS queue and develop a worker process to flush the queue to the on-premises database.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use an Amazon Elastic Map Reduce (EMR) S3DistCp as a synchronization mechanism between the on- premises database and a Hadoop cluster on AWS.", "IsAnswer": false }],
            "Explanation":"See link for more info",
            "Ref":"https://aws.amazon.com/sqs/faqs/"

    },
      {
        "Id": 19,
        "Name": "Your company plans to host a large donation website on Amazon Web Services (AWS). You anticipate a large and undetermined amount of traffic that will create many database writes. To be certain that you do not drop any writes to a database hosted on AWS, which service should you use?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Simple Queue Service (SQS) for capturing the writes and draining the queue to write to the database.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon DynamoDB with provisioned write throughput up to the anticipated peak write throughput.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon ElastiCache to store the writes until the writes are committed to the database.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon RDS with provisioned IOPS up to the anticipated peak write throughput.", "IsAnswer": false }],
            "Explanation":"There is no limit on the number of messages that can be pushed onto SQS. The retention period of the SQS is 4 days by default and it can be changed to 14 days. This will make sure that no writes are missed.",
            "Ref":"https://aws.amazon.com/sqs/faqs/"

    },
      {
        "Id": 20,
        "Name": "You have been asked to design the storage layer for an application. The application requires disk performance of at least 100,000 IOPS. In addition, the storage layer must be able to survive the loss of an individual disk, EC2 instance, or Availability Zone without any data loss. The volume you provide must have a capacity of at least 3 TB. Which of the following designs will meet these objectives?", 
        "Tag":"DataStorage",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Instantiate a c3 8xlarge instance in us-east-1. Provision 4x1TB EBS volumes, attach them to the instance, and configure them as a single RAID 5 volume. Ensure that EBS snapshots are performed every 15 minutes.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Instantiate a c3 8xlarge instance in us-east-1. Provision 3xlTB EBS volumes, attach them to the Instance, and configure them as a single RAID 0 volume. Ensure that EBS snapshots are performed every 15 minutes.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Instantiate an 12 8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Provision 3x1TB EBS volumes, attach them to the instance, and configure them as a second RAID 0 volume. Configure synchronous, block-level replication from the ephemeral-backed volume to the EBS- backed volume.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Instantiate a c3 8xlarge instance in us-east-1. Provision an AWS Storage Gateway and configure it for 3 TB of storage and 100,000 IOPS. Attach the volume to the instance.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Instantiate an 12 8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Configure synchronous, block-level replication to an identically configured instance in us-east-1b.", "IsAnswer": true }],
            "Explanation":"It doesn’t protect against a loss of two EC2 instances or two AZs, but the question asks about protection of ONE disk, EC2 instance or AZ loss.",
            "Ref":"https://acloud.guru/course/aws-certified-solutions-architect-associate/discuss/-KJdi4tFMp2x_O88J6U4/an-architecture-design-question"

    }
    ,
      {
        "Id": 21,
        "Name": "Your company has HQ in Tokyo and branch offices all over the world and is using a logistics software with a multi-regional deployment on AWS in Japan, Europe and US. The logistic software has a 3-tier architecture and currently uses MySQL 5.6 for data persistence. Each region has deployed its own database. In the HQ region you run an hourly batch process reading data from every region to compute cross- regional reports that are sent by email to all offices. This batch process must be completed as fast as possible to quickly optimize logistics. How do you build the database architecture in order to meet the requirements?", 
        "Tag":"DataStorage",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "For each regional deployment, use MySQL on EC2 with a master in the region and use S3 to copy data files hourly to the HQ region.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "For each regional deployment, use RDS MySQL with a master in the region and send hourly RDS snapshots to the HQ region.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use Direct Connect to connect all regional MySQL deployments to the HQ region and reduce network latency for the batch process.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "For each regional deployment, use RDS MySQL with a master in the region and a read replica In the HQ region.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "For each regional deployment, use MySQL on EC2 with a master in the region and send hourly EBS snapshots to the HQ region.", "IsAnswer": false }]

    } ,
      {
        "Id": 22,
        "Name": "Company B is launching a new game app for mobile devices. Users will log into the game using their existing social media account. To streamline data capture, Company B would like to directly save player data and scoring information from the mobile app to a DynamoDB table named ScoreData. When a user saves their game, the progress data will be stored to the GameState S3 bucket. What is the best approach for storing data to DynamoDB and S3?", 
        "Tag":"DataStorage",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Login with Amazon allowing users to sign in with an Amazon account providing the mobile app with access to the ScoreData DynamoDB table and the GameState S3 bucket.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use temporary security credentials that assume a role providing access to the ScoreData DynamoDB table and the GameState S3 bucket using web identity federation", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use an IAM user with access credentials assigned a role providing access to the ScoreData DynamoDB table and the GameState S3 bucket for distribution with the mobile app", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use an EC2 instance that is launched with an EC2 role providing access to the ScoreData DynamoDB table and the GameState S3 bucket that communicates with the mobile app via web services", "IsAnswer": false }],
            "Explanation":"The requirements state “Users will log into the game using their existing social media account to streamline data capture.” This is what Cognito is used for, ie Web Identity Federation. Amazon also recommend to 'build your app so that it requests temporary AWS security credentials dynamically when needed using web identity federation.'"

    } ,
      {
        "Id": 23,
        "Name": "You have recently joined a startup company building sensors to measure street noise and air quality in urban areas. The company has been running a pilot deployment of around 100 sensors for 3 months. Each sensor uploads 1KB of sensor data every minute to a backend hosted on AWS. During the pilot, you measured a peak of 10 IOPS on the database, and you stored an average of 3GB of sensor data per month in the database. The current deployment consists of a load-balanced, auto scaled Ingestion layer using EC2 instances, and a PostgreSQL RDS database with 500GB standard storage. The pilot is considered a success and your CEO has managed to get the attention of some potential Investors. The business plan requires a deployment of at least 100k sensors which needs to be supported by the backend. You also need to store sensor data for at least two years to be able to compare year over year improvements. To secure funding, you have to make sure that the platform meets these requirements and leaves room for further scaling. Which setup will meet the requirements?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Replace the RDS instance with a 6 node Redshift cluster with 96TB of storage", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Keep the current architecture, but upgrade RDS storage to 3TB and 10k provisioned IOPS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Ingest data into a DynamoDB table and move old data to a Redshift cluster", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add an SQS queue to the ingestion layer to buffer writes to the RDS Instance", "IsAnswer": false }],
            "Explanation":"The POC solution is being scaled up by 1000, which means it will require 72TB of Storage to retain 24 months worth of data. This rules out RDS as a possible DB solution which leaves you with RedShift. I believe DynamoDB is a more cost effective and scales better for ingest rather than using EC2 in an autoscaling group. Also, this example solution from AWS is some what similar for reference.",
            "Ref":"http://media.amazonwebservices.com/architecturecenter/AWS_ac_ra_timeseriesprocessing_16.pdf"

    } ,
      {
        "Id": 24,
        "Name": "A web design company currently runs several FTP servers that their 250 customers use to upload and download large graphic files. They wish to move this system to AWS to make it more scalable, but they wish to maintain customer privacy and keep costs to a minimum. What AWS architecture would you recommend?", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Ask their customers to use an S3 client instead of an FTP client. Create a single S3 bucket. Create an IAM User for each customer. Put the IAM Users in a Group that has an IAM policy that permits access to sub-directories within the bucket via use of the 'username' Policy Variable.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a single S3 bucket with Requester Pays turned on and ask their customers to use an S3 client instead of an FTP client. Create a bucket for each customer with a Bucket Policy that permits access only to that one customer.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a single S3 bucket with Reduced Redundancy Storage turned on and ask their customers to use an S3 client instead of an FTP client. Create a bucket for each customer with a Bucket Policy that permits access only to that one customer.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an auto-scaling group of FTP servers with a scaling policy to automatically scale-in when minimum network traffic on the auto-scaling group is below a given threshold. Load a central list of FTP users from S3 as part of the User Data startup script on each instance.", "IsAnswer": false }],
            "Explanation":"See link for more info",
            "Ref":"https://aws.amazon.com/blogs/security/writing-iam-policies-grant-access-to-user-specific-folders- in-an-amazon-s3-bucket/"

    } ,
      {
        "Id": 25,
        "Name": "Your company is in the process of developing a next generation pet collar that collects biometric information to assist families with promoting healthy lifestyles for their pets. Each collar will push 30kb of biometric data in JSON format every 2 seconds to a collection platform that will process and analyze the data providing health trending information back to the pet owners and veterinarians via a web portal. Management has tasked you to architect the collection platform ensuring the following requirements are met:  1) Provide the ability for real-time analytics of the inbound biometric data 2) Ensure processing of the biometric data is highly durable, elastic and parallel 3) The results of the analytic processing should be persisted for data mining. Which architecture outlined below will meet the initial requirements for the collection platform?", 
        "Tag":"scalability",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Utilize Amazon Kinesis to collect the inbound sensor data, analyze the data with Kinesis clients and save the results to a Redshift cluster using EMR.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Utilize SQS to collect the inbound sensor data, analyze the data from SQS with Amazon Kinesis and save the results to a Microsoft SQL Server RDS Instance.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Utilize S3 to collect the inbound sensor data, analyze the data from S3 with a daily scheduled Data Pipeline and save the results to a Redshift Cluster.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Utilize EMR to collect the inbound sensor data, analyze the data from EMR with Amazon Kinesis and save the results to DynamoDB.", "IsAnswer": false }]
    } ,
      {
        "Id": 26,
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
        "Id": 27,
        "Name": "A 3-tier e-commerce web application is currently deployed on-premises, and will be migrated to AWS for greater scalability and elasticity. The web tier currently shares read-only data using a network distributed file system. The app server tier uses a clustering mechanism for discovery and shared session state that depends on IP multicast. The database tier uses shared-storage clustering to provide database failover capability, and uses several read slaves for scaling. Data on all servers and the distributed file system directory is backed up weekly to off-site tapes. Which AWS storage and database architecture meets the requirements of the application?", 
        "Tag":"DataStorage",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment and one or more read replicas. Backup: web servers, app servers, and database backed up weekly to Glacier using snapshots.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Web servers: store read-only data in an EC2 NFS server, mount to each web server at boot time. App servers: share state using a combination of DynamoDB and IP multicast. Database: use RDS with multi- AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.", "IsAnswer": false }],
            "Explanation":"Amazon Glacier doesn’t suit all storage situations. Listed following are a few storage needs for which you should consider other AWS storage options instead of Amazon Glacier. Data that must be updated very frequently might be better served by a storage solution with lower read/write latencies, such as Amazon EBS, Amazon RDS, Amazon DynamoDB, or relational databases running on EC2.",
            "Ref":"https://d0.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf"

    } ,
      {
        "Id": 28,
        "Name": "You require the ability to analyze a large amount of data which is stored on Amazon S3 using Amazon Elastic MapReduce. You are using the cc2.8xlarge instance type, whose CPUs are mostly idle during processing. Which of the below would be the most cost efficient way to reduce the runtime of the job?", 
        "Tag":"???",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create fewer, larger files m Amazon S3.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use smaller instances that have higher aggregate I/O performance.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create more, smaller files on Amazon S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add additional cc2.8xlarge instances by introducing a task group.", "IsAnswer": false }]
    } ,
      {
        "Id": 29,
        "Name": "You are the new IT architect in a company that operates a mobile sleep tracking application. When activated at night, the mobile app is sending collected data points of 1 kilobyte every 5 minutes to your backend. The backend takes care of authenticating the user and writing the data points into an Amazon DynamoDB table. Every morning, you scan the table to extract and aggregate last night's data on a per user basis, and store the results in Amazon S3. Users are notified via Amazon SNS mobile push notifications that new data is available, which is parsed and visualized by the mobile app. Currently you have around 100k users who are mostly based out of North America. You have been tasked to optimize the architecture of the backend system to lower cost. What would you recommend? Choose 2 answers", 
        "Tag":"deployment????",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Have the mobile app access Amazon DynamoDB directly Instead of JSON files stored on Amazon S3.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Write data directly into an Amazon Redshift cluster replacing both Amazon DynamoDB and Amazon S3.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Introduce an Amazon SQS queue to buffer writes to the Amazon DynamoDB table and reduce provisioned write throughput.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Introduce Amazon Elasticache to cache reads from the Amazon DynamoDB table and reduce provisioned read throughput.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create a new Amazon DynamoDB table each day and drop the one for the previous day after its data is on Amazon S3.", "IsAnswer": false }],
            "Explanation":"See link for more info.",
            "Ref":"https://d0.awsstatic.com/whitepapers/performance-at-scale-with-amazon-elasticache.pdf"

    } ,
      {
        "Id": 30,
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
        "Id": 31,
        "Name": "Your website is serving on-demand training videos to your workforce. Videos are uploaded monthly in high resolution MP4 format. Your workforce is distributed globally, often on the move and using company-provided tablets that require the HTTP Live Streaming (HLS) protocol to watch a video. Your company has no video transcoding expertise and if required you may need to pay for a consultant. How do you implement the most cost-efficient architecture without compromising high availability and quality of video delivery?", 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.", "IsAnswer": false }]    
      } ,
      {
        "Id": 32,
        "Name": "You deployed your company website using Elastic Beanstalk and you enabled log file rotation to S3. An Elastic MapReduce Job is periodically analyzing the logs on S3 to build a usage dashboard that you share with your CIO. You recently improved overall performance of the website using CloudFront for dynamic content delivery and your website as the origin. After this architectural change, the usage dashboard shows that the traffic on your website dropped by an order of magnitude. How do you fix your usage dashboard?", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Change your log collection process to use CloudWatch ELB metrics as input of the Elastic MapReduce Job.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Turn on CloudTrail and use trail log files on S3 as input of the Elastic MapReduce job.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Enable CloudFront to deliver access logs to S3 and use them as input of the Elastic MapReduce job.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use Elastic Beanstalk 'Restart App Server(s)' option to update log delivery to the Elastic MapReduce job.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use Elastic Beanstalk 'Rebuild Environment' option to update log delivery to the Elastic MapReduce job.", "IsAnswer": false }],
            "Explanation":"See link for more info",
            "Ref":"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html"

    } ,
      {
        "Id": 33,
        "Name": "A web company is looking to implement an intrusion detection and prevention system into their deployed VPC. This platform should have the ability to scale to thousands of instances running inside of the VPC. How should they architect their solution to achieve these goals?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure each host with an agent that collects all network traffic and sends that traffic to the IDS/IPS platform for inspection.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure an instance with monitoring software and the elastic network interface (ENI) set to promiscuous mode packet sniffing to see all traffic across the VPC.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a second VPC and route all traffic from the primary application VPC through the second VPC where the scalable virtualized IDS/IPS platform resides.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure servers running in the VPC using the host-based 'route' commands to send all traffic through the platform to a scalable virtualized IDS/IPS.", "IsAnswer": false }]

    } ,
      {
        "Id": 34,
        "Name": "You are running a successful multitier web application on AWS and your marketing department has asked you to add a reporting tier to the application. The reporting tier will aggregate and publish status reports every 30 minutes from user-generated information that is being stored in your web application's database. You are currently running a Multi-AZ RDS MySQL instance for the database tier. You also have implemented ElastiCache as a database caching layer between the application tier and database tier. Please select the answer that will allow you to successfully implement the reporting tier with as little impact as possible to your database:", 
        "Tag":"DataStorage",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Launch a RDS Read Replica connected to your Multi AZ master database and generate reports by querying the Read Replica.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Continually send transaction logs from your master database to an S3 bucket and generate the reports off the S3 bucket using S3 byte range requests.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Generate the reports by querying the ElastiCache database caching tier.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Generate the reports by querying the synchronously replicated standby RDS MySQL instance maintained through Multi-AZ.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""

    } ,
      {
        "Id": 35,
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


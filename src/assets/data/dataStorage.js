{
    "quiz": {
        "name": "Data Storage",
        "logo" : "assets/img/RDS.png"
    },
    "questions": [
      {
        "Id": 1,
        "Name": "In the Amazon RDS Oracle DB engine, the Database Diagnostic Pack and the Database Tuning Pack are only available with ______________", 
        "Tag":"DataStorage",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Oracle Standard Edition", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Oracle Express Edition", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Oracle Enterprise Edition", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of these", "IsAnswer": false }]

    },


      {
        "Id": 2,
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
        "Id": 3,
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
        "Id": 4,
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
        "Id": 5,
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
        "Id": 6,
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
        "Id": 7,
        "Name": "You're running an application on-premises due to its dependency on non-x86 hardware and want to use AWS for data backup. Your backup application is only able to write to POSIX-compatible, block-based storage. You have 140TB of data and would like to mount it as a single folder on your file server. Users must be able to access portions of this data while the backups are taking place. What backup solution would be most appropriate for this use case?", 
        "Tag":"Data",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Storage Gateway and configure it to use Gateway Cached volumes", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use Storage Gateway and configure it to use Gateway Stored volumes", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure your backup software to use S3 as the target for your data backups", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure your backup software to use Glacier as the target for your data backups", "IsAnswer": true }],
            "Explanation":"Rejecting other 3 options as data stored to S3 and S3 is object storage, uses a flat namespace and isn’t meant to serve as a standalone, POSIX-compliant file system. VTS shelf would have been a better option, but the question might be old. Also unclear for the need to take care of users been able to access portions of data."
    } 
    ,
    {
        "Id": 8,
        "Name": "Which of the following ports are required to be opened to run a Storage Gateway on-premise?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "443 inbound, 80, 3260 and UDP 53 outbound", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "80 inbound, 443, 3260 outbound", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "80, 443, and UDP 53 outbound", "IsAnswer": false }],
        "Explanation":"Port 80 is only needed for activation and can be closed once that's complete.",
        "Ref":"http://docs.aws.amazon.com/storagegateway/latest/userguide/Requirements.html"
    }
     ]
}
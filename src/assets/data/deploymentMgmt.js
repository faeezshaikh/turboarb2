{
    "quiz": {
        "name": "Deployment",
        "logo" : "assets/img/SNS.png"
    },
    "questions": [
      {
        "Id": 1,
        "Name": "Refer to the architecture diagram below of a batch processing solution using Simple Queue Service (SQS) to set up a message queue between EC2 instances which are used as batch processors. CloudWatch monitors the number of job requests (queued messages) and an Auto Scaling group adds or deletes batch servers automatically based on parameters set in CloudWatch alarms. You can use this architecture to implement which of the following features in a cost effective and efficient manner?", 
        "Pic":"assets/img/ques2.png",
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Coordinate number of EC2 instances with number of Job requests automatically, thus improving cost effectiveness.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Reduce the overall time for executing Jobs through parallel processing by allowing a busy EC2 instance that receives a message to pass it to the next instance in a daisy-chain setup.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Implement fault tolerance against EC2 instance failure since messages would remain in SQS and work can continue with recovery of EC2 instances. Implement fault tolerance against SQS failure by backing up messages to S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Handle high priority Jobs before lower priority Jobs by assigning a priority metadata field to SQS messages.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Implement message passing between EC2 instances within a batch by exchanging messages through SQS.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"https://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/as-using-sqs-queue.html"

    }   ,
     
      {
        "Id": 2,
        "Name": "Your system recently experienced down time. During the troubleshooting process you found that a new administrator mistakenly terminated several production EC2 instances. Which of the following strategies will help prevent a similar situation in the future? The administrator still must be able to: 1) launch, start, stop, and terminate development resources, 2) launch and start production instances.", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Leverage EC2 termination protection and multi-factor authentication, which together require users to authenticate before terminating EC2 instances.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Leverage resource based tagging, along with an IAM user which can prevent specific users from terminating production EC2 resources.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM user which is not allowed to terminate instances by leveraging production EC2 termination protection.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an IAM user and apply an IAM role which prevents users from terminating production EC2 instances.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"http://blogs.aws.amazon.com/security/post/Tx29HCT3ABL7LP3/Resource-level-Permissions-for- EC2-Controlling-Management-Access-on-Specific-Ins"


    },
     
      {
        "Id": 3,
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
        "Id": 4,
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
        "Id": 5,
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
        "Id": 6,
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

    } 
     ]
}
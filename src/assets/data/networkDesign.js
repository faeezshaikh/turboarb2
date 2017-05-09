{
    "quiz": {
        "name": "Network Design",
        "logo" : "assets/img/SQS.png",
        "time":"20 minutes"
    },
    "questions": [ {
        "Id": 1,
        "Name": "You are designing the network infrastructure for an application server in Amazon VPC. Users will access all the application instances from the Internet, as well as from an on-premises network. The on-premises network is connected to your VPC over an AWS Direct Connect link. How would you design routing to meet the above requirements?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure a single routing table with a default route via the Internet gateway. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure a single routing table with a default route via the Internet gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure two routing tables: one that has a default route via the Internet gateway, and another that has a default route via the VPN gateway. Associate both routing tables with each VPC subnet.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure a single routing table with two default routes: one to the Internet via an Internet gateway, the other to the on-premises network via the VPN gateway. Use this routing table across all subnets in your VPC.", "IsAnswer": false }]
    },
      {
        "Id": 2,
        "Name": "Amazon EC2 provides a repository of public data sets that can be seamlessly integrated into AWS cloud-based applications. What is the monthly charge for using the public data sets?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A 1 time charge of 10$ for all the datasets.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1$ per dataset per month", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10$ per month for all the datasets", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "There is no charge for using the public data sets", "IsAnswer": true}]

    },
          {
        "Id": 3,
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
        "Id": 4,
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
        "Id": 5,
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
        "Id": 6,
        "Name": "You have recently joined a startup company building sensors to measure street noise and air quality in urban areas. The company has been running a pilot deployment of around 100 sensors for 3 months. Each sensor uploads 1KB of sensor data every minute to a backend hosted on AWS. During the pilot, you measured a peak of 10 IOPS on the database, and you stored an average of 3GB of sensor data per month in the database. The current deployment consists of a load-balanced, auto scaled Ingestion layer using EC2 instances, and a PostgreSQL RDS database with 500GB standard storage. The pilot is considered a success and your CEO has managed to get the attention of some potential Investors. The business plan requires a deployment of at least 100k sensors which needs to be supported by the backend. You also need to store sensor data for at least two years to be able to compare year over year improvements. To secure funding, you have to make sure that the platform meets these requirements and leaves room for further scaling. Which setup will meet the requirements?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Replace the RDS instance with a 6 node Redshift cluster with 96TB of storage", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Keep the current architecture, but upgrade RDS storage to 3TB and 10k provisioned IOPS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Ingest data into a DynamoDB table and move old data to a Redshift cluster", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add an SQS queue to the ingestion layer to buffer writes to the RDS Instance", "IsAnswer": false }],
            "Explanation":"The POC solution is being scaled up by 1000, which means it will require 72TB of Storage to retain 24 months worth of data. This rules out RDS as a possible DB solution which leaves you with RedShift. I believe DynamoDB is a more cost effective and scales better for ingest rather than using EC2 in an autoscaling group. Also, this example solution from AWS is some what similar for reference.",
            "Ref":"http://media.amazonwebservices.com/architecturecenter/AWS_ac_ra_timeseriesprocessing_16.pdf"

    } 
    ,
     {
        "Id": 7,
        "Name": "You are designing a photo-sharing mobile app. The application will store all pictures in a single Amazon S3 bucket. Users will upload pictures from their mobile device directly to Amazon S3 and will be able to view and download their own pictures directly from Amazon S3. You want to configure security to handle potentially millions of users in the most secure manner possible. What should your server-side application do when a new user registers on the photo- sharing mobile application?", 
        "Tag":"Scalability, N/w design",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an IAM user. Update the bucket policy with appropriate permissions for the IAM user. Generate an access key and secret key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create an IAM user. Assign appropriate permissions to the IAM user. Generate an access key and secret key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a set of long-term credentials using AWS Security Token Service with appropriate permissions. Store these credentials in the mobile app and use them to access Amazon S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Record the user's information in Amazon RDS and create a role in IAM with appropriate permissions. When the user uses their mobile app, create temporary credentials using the AWS Security Token Service 'AssumeRole' function. Store these credentials in the mobile app's memory and use them to access Amazon S3. Generate new credentials the next time the user runs the mobile app.", "IsAnswer": true},
            { "Id": 1059, "QuestionId": 1010, "Name": "Record the user's information in Amazon DynamoDB. When the user uses their mobile app, create temporary credentials using AWS Security Token Service with appropriate permissions. Store these credentials in the mobile app's memory and use them to access Amazon S3. Generate new credentials the next time the user runs the mobile app.", "IsAnswer": false }],
        "Explanation":"We can use either RDS or DynamoDB, however in our given answers, IAM role is mentioned only with RDS, so I would go with Answer B. Question was explicitly focused on security, so IAM with RDS is the best choice."
    } 

    ,
     {
        "Id": 8,
        "Name": "A customer has established an AWS Direct Connect connection to AWS. The link is up and routes are being advertised from the customer's end; however the customer is unable to connect from EC2 instances inside its VPC to servers residing in its datacenter. Which of the following options provide a viable solution to remedy this situation? Choose 2 answers", 
        "Tag":"Networking",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Modify the instances VPC subnet route table by adding a route back to the customer's on- premises environment.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Enable route propagation to the customer gateway (CGW).", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Add a route to the route table with an IPsec VPN connection as the target.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Enable route propagation to the virtual private gateway (VGW).", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Modify the route table of all instances using the route' command.", "IsAnswer": false }],
            "Explanation": "See link for more information",
            "Ref" :"https://myawsscribble.wordpress.com/2015/09/25/setting-up-and-configuring-aws-directconnect/"
    } ,
     {
        "Id": 9,
        "Name": "You have deployed a three-tier web application in a VPC with a CIDR block of 10.0.0.0/28. You initially deploy two web servers, two application servers, two database servers and one NAT instance for a total of seven EC2 instances. The web, application and database servers are deployed across two availability zones (AZs). You also deploy an ELB in front of the two web servers, and use Route53 for DNS. Web traffic gradually increases in the first few days following the deployment, so you attempt to double the number of instances in each tier of the application to handle the new load. Unfortunately some of these new Instances fall to launch. Which of the following could be the root cause? Choose 2 answers", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS reserves the first and the last private IP address in each subnet's CIDR block so you do not have enough addresses left to launch all of the new EC2 instances", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The Internet Gateway (IGW) of your VPC has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The ELB has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS reserves one IP address in each subnet's CIDR block for Route53 so you do not have enough addresses left to launch all of the new EC2 instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS reserves the first four and the last IP address in each subnet's CIDR block so you do not have enough addresses left to launch all of the new EC2 instances", "IsAnswer": true }],
            "Explanation":"See link for info",
            "Ref":"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html"
    } 
    ,
     {
        "Id": 10,
        "Name": "Your company previously configured a heavily used, dynamically routed VPN connection between your on-premises data center and AWS. You recently provisioned a DirectConnect connection and would like to start using this new connection. After configuring DirectConnect settings in the AWS Console, which of the following options will provide the most seamless transition for your users?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure your DirectConnect router, update your VPC route tables to point to the DirectConnect connection, configure your VPN connection with a higher BGP priority, and verify network traffic is leveraging the DirectConnect connection.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Delete your existing VPN connection to avoid routing loops, configure your DirectConnect router with the appropriate settings, and verify network traffic is leveraging DirectConnect.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Update your VPC route tables to point to the DirectConnect connection, configure your DirectConnect router with the appropriate settings, verify network traffic is leveraging DirectConnect, and then delete the VPN connection.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure your DirectConnect router with a higher BGP priority than your VPN router, verify network traffic is leveraging DirectConnect, and then delete your existing VPN connection.", "IsAnswer": false }],
            "Explanation":"Direct Connect takes priority over Dynamically configured VPN connections."
    } 
     ]
}
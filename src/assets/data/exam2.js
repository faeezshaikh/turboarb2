{
    "quiz": {
        "name": "Exam 2",
        "logo" : "assets/img/VPC.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "You've been brought in as solutions architect to assist an enterprise customer with their migration of an e-commerce platform to Amazon Virtual Private Cloud (VPC). The previous architect has already deployed a 3-tier VPC. The configuration is as shown below at the end (See image below). You are now ready to begin deploying EC2 instances into the VPC. Web servers must have direct access to the Internet. Application and database servers cannot have direct access to the Internet. Which configuration below will allow you the ability to remotely administer your application and database servers, as well as allow these servers to retrieve updates from the Internet?",
        "Pic": "assets/img/ques1.png",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create a bastion and NAT instance in subnet-258bc44d, and add a route from rtb-238bc44b to the NAT instance.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Add a route from rtb-238bc44b to igw-2d8bc445 and add a bastion and NAT instance within subnet-248bc44c.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a bastion and NAT instance in subnet-248bc44c, and add a route from rtb-238bc44b to subnet-258bc44d.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create a bastion and NAT instance in subnet-258bc44d, add a route from rtb-238bc44b to Igw-2d8bc445, and a new NACL that allows access between subnet-258bc44d and subnet- 248bc44c.", "IsAnswer": false }],
        "Explanation":"Create NAT instance in public subnet which is web server subnet (suDnet-258Dc44d) and add route (rtD-238Dc44D) from private subnet (database subnet-9189c6f9) to the public NAT one to retrieve the updates."

    },
   {
        "Id": 2,
        "Name": "You are designing the network infrastructure for an application server in Amazon VPC. Users will access all the application instances from the Internet, as well as from an on-premises network. The on-premises network is connected to your VPC over an AWS Direct Connect link. How would you design routing to meet the above requirements?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure a single routing table with a default route via the Internet gateway. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure a single routing table with a default route via the Internet gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure two routing tables: one that has a default route via the Internet gateway, and another that has a default route via the VPN gateway. Associate both routing tables with each VPC subnet.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure a single routing table with two default routes: one to the Internet via an Internet gateway, the other to the on-premises network via the VPN gateway. Use this routing table across all subnets in your VPC.", "IsAnswer": false }]
    },
      {
        "Id": 3,
        "Name": "With regard to IAM, which of the following best describes a Group?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A collection of AWS accounts", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "It's the group of EC2 machines that gain the permissions specified in the GROUP.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "There's no GROUP in IAM, but only USERS and RESOURCES.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A collection of users.", "IsAnswer": false }],
            "Explanation":"Use groups to assign permissions to IAM users Instead of defining permissions for individual IAM users, it’s usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.), define the relevant permissions for each group, and then assign IAM users to those groups. All the users in an IAM group inherit the permissions assigned to the group. That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can simply change what IAM group their IAM user belongs to.",
            "Ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#use-groups-for- permissions"
    },
      {
        "Id": 4,
        "Name": "Amazon EC2 provides a repository of public data sets that can be seamlessly integrated into AWS cloud-based applications. What is the monthly charge for using the public data sets?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A 1 time charge of 10$ for all the datasets.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1$ per dataset per month", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10$ per month for all the datasets", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "There is no charge for using the public data sets", "IsAnswer": true}]

    },
      {
        "Id": 5,
        "Name": "You have deployed a web application, targeting a global audience across multiple AWS Regions under the domain name example.com. You decide to use Route53 Latency-Based Routing to serve web requests to users from the region closest to the user. To provide business continuity in the event of server downtime you configure weighted record sets associated with two web servers in separate Availability Zones per region. During a DR test you notice that when you disable all web servers in one of the regions Route53 does not automatically direct all users to the other region. What could be happening? Choose 2 answers", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You did not set 'Evaluate Target Health' to 'Yes' on the latency alias resource record set associated with example.com in the region where you disabled the servers", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "One of the two working web servers in the other region did not pass its HTTP health check", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Latency resource record sets cannot be used in combination with weighted resource record sets", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "You did not setup an HTTP health check for one or more of the weighted resource record sets associated with the disabled web servers", "IsAnswer": false }],
            "Explanation":"For both latency alias resource record sets, you set the value of “Evaluate Target Health” to Yes. You use the Evaluate Target Health setting for each latency alias resource record set to make Amazon Route 53 evaluate the health of the alias targets—the weighted resource record sets— and respond accordingly.",
            "Ref":"http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html"

    },
      {
        "Id": 6,
        "Name": "In the Amazon RDS Oracle DB engine, the Database Diagnostic Pack and the Database Tuning Pack are only available with ______________", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Oracle Standard Edition", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Oracle Express Edition", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Oracle Enterprise Edition", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of these", "IsAnswer": false }]

    },
      {
        "Id": 7,
        "Name": "An international company has deployed a multi-tier web application that relies on DynamoDB in a single region. For regulatory reasons they need disaster recovery capability in a separate region with a Recovery Time Objective of 2 hours and a Recovery Point Objective of 24 hours. They should synchronize their data on a regular basis and be able to provision the web application rapidly using CloudFormation. The objective is to minimize changes to the existing web application, control the throughput of DynamoDB used for the synchronization of data, and synchronize only the modified elements. Which design would you choose to meet these requirements?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use AWS Data Pipeline to schedule a DynamoDB cross region copy once a day, create a 'LastUpdated' attribute in your DynamoDB table that would represent the timestamp of the last update and use it as a filter", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use AWS Data Pipeline to schedule an export of the DynamoDB table to S3 in the current region once a day, then schedule another task immediately after it that will import data from S3 to DynamoDB in the other region", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use EMR and write a custom script to retrieve data from DynamoDB in the current region using a SCAN operation and push it to DynamoDB in the second region", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Send also each write into an SQS queue in the second region, use an auto-scaling group behind the SQS queue to replay the write in the second region", "IsAnswer": false }],
            "Explanation":"Export of dynamo DB is incremental and it will amend the backup with latest changes."

    },
      {
        "Id": 8,
        "Name": "Your company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past few months resulting in significant financial losses. Your CIO is strongly considering moving the application to AWS. While working on achieving buy-In from the other company executives, he asks you to develop a disaster recovery plan to help improve business continuity in the short term. He specifies a target Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 1 hour or less. He also asks you to implement the solution within 2 weeks. Your database is 200GB in size and you have a 20Mbps Internet connection. How would you do this while minimizing costs?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an EBS backed private AMI which includes a fresh install of your application. Develop a CloudFormation template which includes your AMI and the required EC2, AutoScaling, and ELB resources to support deploying the application across Multiple-Availability-Zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Deploy your application on EC2 instances within an Auto Scaling group across multiple availability zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an EBS backed private AMI which includes a fresh install of your application. Setup a script in your data center to backup the local database every 1 hour and to encrypt and copy the resulting file to an S3 bucket using multi-part upload.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Install your application on a compute-optimized EC2 instance capable of supporting the application's average load. Synchronously replicate transactions from your on-premises database to a database instance in AWS across a secure Direct Connect connection.", "IsAnswer": false }]

    },
      {
        "Id": 9,
        "Name": "You would like to create a mirror image of your production environment in another region for disaster recovery purposes. Which of the following AWS resources do not need to be recreated in the second region? Choose 2 answers.", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Route53 Record Sets", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Launch Configurations", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "EC2 Key Pairs", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Security Groups", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "IAM Roles", "IsAnswer": true },
            { "Id": 1060, "QuestionId": 1010, "Name": "Elastic IP Addresses (EIP)", "IsAnswer": false }]

    },
      {
        "Id": 10,
        "Name": "Your startup wants to implement an order fulfillment process for selling a personalized gadget that needs an average of 3-4 days to produce with some orders taking up to 6 months. You expect 10 orders per day on your first day, 1000 orders per day after 6 months and 10,000 orders after 12 months. Orders coming in are checked for consistency, then dispatched to your manufacturing plant for production, quality control, packaging, shipment and payment processing. If the product does not meet the quality standards at any stage of the process, employees may force the process to repeat a step. Customers are notified via email about order status and any critical issues with their orders such as payment failure. Your base architecture includes AWS Elastic Beanstalk for your website with an RDS MySQL instance for customer data and orders. How can you implement the order fulfillment process while making sure that the emails are delivered reliably?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Add a business process management application to your Elastic Beanstalk app servers and re- use the RDS database for tracking order status. Use one of the Elastic Beanstalk instances to send emails to customers.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1. Use SES to send emails to customers.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use an SQS queue to manage all process tasks. Use an Auto Scaling group of EC2 instances that poll the tasks and execute them. Use SES to send emails to customers.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1. Use the decider instance to send emails to customers.", "IsAnswer": false }],
            "Explanation":"See linked pdf for more information",
            "Ref":"http://media.amazonwebservices.com/architecturecenter/AWS_ac_ra_ecommerce_checkout_13.pdf"

    },
      {
        "Id": 11,
        "Name": "Your company runs a customer facing event registration site. This site is built with a 3-tier architecture with web and application tier servers and a MySQL database. The application requires 6 web tier servers and 6 application tier servers for normal operation, but can run on a minimum of 65% server capacity and a single MySQL database. When deploying this application in a region with three availability zones (AZs), which architecture provides high availability?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each A2 inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances In each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the other AZ.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 3 AZs with 2 EC2 instances In each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database Service) deployment.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database Service) deployment", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the two other AZs.", "IsAnswer": false }],
        "Explanation":"You need 3 AZs with 2 EC2 instances in each AZ, so that if one AZ goes down you have 6 out of 9 (66.66%) availability all the time. And for high-availability you need multi-AZ RDS. See link for more information",
        "Ref":"http://highscalability.com/blog/2016/1/11/a-beginners-guide-to-scaling-to-11-million-users-on-amazons.html"

    },
      {
        "Id": 12,
        "Name": "Your application is using an ELB in front of an Auto Scaling group of web/application servers deployed across two AZs and a Multi-AZ RDS Instance for data persistence. The database CPU is often above 80% usage and 90% of I/O operations on the database are reads. To improve performance you recently added a single-node Memcached ElastiCache Cluster to cache frequent DB query results. In the next weeks the overall workload is expected to grow by 30%. Do you need to change anything in the architecture to maintain the high availability of the application with the anticipated additional load? Why", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes, you should deploy two Memcached ElastiCache Clusters in different AZs because the RDS instance will not be able to handle the load if the cache node fails.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "No, if the cache node fails you can always get the same data from the DB without having any availability impact.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "No, if the cache node fails the automated ElastiCache node recovery feature will prevent any availability impact.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Yes, you should deploy the Memcached ElastiCache Cluster with two nodes in the same AZ as the RDS DB master instance to handle the load if one cache node fails.", "IsAnswer": false }],
            "Explanation":"A single-node Memcached ElastiCache cluster failure is nothing but a total failure. (Even though AWS will automatically recover the failed node, there are no other nodes in the cluster).To mitigate the impact of a node failure, spread your cached data over more nodes. Because Memcached does not support replication, a node failure will always result in some data loss from your cluster. When you create your Memcached cluster you can create it with 1 to 20 nodes, or more by special request. Partitioning your data across a greater number of nodes means you’ll lose less data if a node fails. For example, if you partition your data across 10 nodes, any single node stores approximately 10% of your cached data. In this case, a node failure loses approximately 10% of your cache which needs to be replaced when a replacement node is created and provisioned. To mitigate the impact of an availability zone failure, locate your nodes in as many availability zones as possible. In the unlikely event of an AZ failure, you will lose only the data cached in that AZ, not the data cached in the other AZs.",
            "Ref":"http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/BestPractices.html"

    },
      {
        "Id": 13,
        "Name": "An ERP application is deployed across multiple AZs in a single region. In the event of failure, the Recovery Time Objective (RTO) must be less than 3 hours, and the Recovery Point Objective (RPO) must be 15 minutes. The customer realizes that data corruption occurred roughly 1.5 hours ago. What DR strategy could be used to achieve this RTO and RPO in the event of this kind of failure?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Take 15 minute DB backups stored in Glacier with transaction logs stored in S3 every 5 minutes.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use synchronous database master-slave replication between two availability zones.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Take hourly DB backups to EC2 instance store volumes with transaction logs stored In S3 every 5 minutes.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Take hourly DB backups to S3, with transaction logs stored in S3 every 5 minutes.", "IsAnswer": true}]

    },
      {
        "Id": 14,
        "Name": "Refer to the architecture diagram below of a batch processing solution using Simple Queue Service (SQS) to set up a message queue between EC2 instances which are used as batch processors. CloudWatch monitors the number of job requests (queued messages) and an Auto Scaling group adds or deletes batch servers automatically based on parameters set in CloudWatch alarms. You can use this architecture to implement which of the following features in a cost effective and efficient manner?", 
        "Pic":"assets/img/ques2.png",

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Coordinate number of EC2 instances with number of Job requests automatically, thus improving cost effectiveness.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Reduce the overall time for executing Jobs through parallel processing by allowing a busy EC2 instance that receives a message to pass it to the next instance in a daisy-chain setup.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Implement fault tolerance against EC2 instance failure since messages would remain in SQS and work can continue with recovery of EC2 instances. Implement fault tolerance against SQS failure by backing up messages to S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Handle high priority Jobs before lower priority Jobs by assigning a priority metadata field to SQS messages.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Implement message passing between EC2 instances within a batch by exchanging messages through SQS.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"https://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/as-using-sqs-queue.html"

    },
      {
        "Id": 15,
        "Name": "Your system recently experienced down time. During the troubleshooting process you found that a new administrator mistakenly terminated several production EC2 instances. Which of the following strategies will help prevent a similar situation in the future? The administrator still must be able to: 1) launch, start, stop, and terminate development resources, 2) launch and start production instances.", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Leverage EC2 termination protection and multi-factor authentication, which together require users to authenticate before terminating EC2 instances.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Leverage resource based tagging, along with an IAM user which can prevent specific users from terminating production EC2 resources.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM user which is not allowed to terminate instances by leveraging production EC2 termination protection.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an IAM user and apply an IAM role which prevents users from terminating production EC2 instances.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"http://blogs.aws.amazon.com/security/post/Tx29HCT3ABL7LP3/Resource-level-Permissions-for- EC2-Controlling-Management-Access-on-Specific-Ins"


    },
      {
        "Id": 16,
        "Name": "Your customer wishes to deploy an enterprise application to AWS, which will consist of several web servers, several application servers, and a small (50GB) Oracle database. Information is stored both in the database and the filesystems of the various servers. The backup system must support database recovery, whole server and whole disk restores, and individual file restores with a recovery time of no more than two hours. They have chosen to use RDS Oracle as the database. Which backup architecture will meet these requirements?", 
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
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Simple Queue Service (SQS) for capturing the writes and draining the queue to write to the database.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon DynamoDB with provisioned write throughput up to the anticipated peak write throughput.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon ElastiCache to store the writes until the writes are committed to the database.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon RDS with provisioned IOPS up to the anticipated peak write throughput.", "IsAnswer": false }],
            "Explanation":"There is no limit on the number of messages that can be pushed onto SQS. The retention period of the SQS is 4 days by default and it can be changed to 14 days. This will make sure that no writes are missed.",
            "Ref":"https://aws.amazon.com/sqs/faqs/"

    },
      {
        "Id": 20,
        "Name": "You have been asked to design the storage layer for an application. The application requires disk performance of at least 100,000 IOPS. In addition, the storage layer must be able to survive the loss of an individual disk, EC2 instance, or Availability Zone without any data loss. The volume you provide must have a capacity of at least 3 TB. Which of the following designs will meet these objectives?", 

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

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Login with Amazon allowing users to sign in with an Amazon account providing the mobile app with access to the ScoreData DynamoDB table and the GameState S3 bucket.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use temporary security credentials that assume a role providing access to the ScoreData DynamoDB table and the GameState S3 bucket using web identity federation", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use an IAM user with access credentials assigned a role providing access to the ScoreData DynamoDB table and the GameState S3 bucket for distribution with the mobile app", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use an EC2 instance that is launched with an EC2 role providing access to the ScoreData DynamoDB table and the GameState S3 bucket that communicates with the mobile app via web services", "IsAnswer": false }],
            "Explanation":"The requirements state “Users will log into the game using their existing social media account to streamline data capture.” This is what Cognito is used for, ie Web Identity Federation. Amazon also recommend to 'build your app so that it requests temporary AWS security credentials dynamically when needed using web identity federation.'"

    } ,
      {
        "Id": 23,
        "Name": "You have recently joined a startup company building sensors to measure street noise and air quality in urban areas. The company has been running a pilot deployment of around 100 sensors for 3 months. Each sensor uploads 1KB of sensor data every minute to a backend hosted on AWS. During the pilot, you measured a peak of 10 IOPS on the database, and you stored an average of 3GB of sensor data per month in the database. The current deployment consists of a load-balanced, auto scaled Ingestion layer using EC2 instances, and a PostgreSQL RDS database with 500GB standard storage. The pilot is considered a success and your CEO has managed to get the attention of some potential Investors. The business plan requires a deployment of at least 100k sensors which needs to be supported by the backend. You also need to store sensor data for at least two years to be able to compare year over year improvements. To secure funding, you have to make sure that the platform meets these requirements and leaves room for further scaling. Which setup will meet the requirements?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Replace the RDS instance with a 6 node Redshift cluster with 96TB of storage", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Keep the current architecture, but upgrade RDS storage to 3TB and 10k provisioned IOPS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Ingest data into a DynamoDB table and move old data to a Redshift cluster", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add an SQS queue to the ingestion layer to buffer writes to the RDS Instance", "IsAnswer": false }],
            "Explanation":"The POC solution is being scaled up by 1000, which means it will require 72TB of Storage to retain 24 months worth of data. This rules out RDS as a possible DB solution which leaves you with RedShift. I believe DynamoDB is a more cost effective and scales better for ingest rather than using EC2 in an autoscaling group. Also, this example solution from AWS is some what similar for reference.",
            "Ref":"http://media.amazonwebservices.com/architecturecenter/AWS_ac_ra_timeseriesprocessing_16.pdf"

    } ,
      {
        "Id": 24,
        "Name": "A web design company currently runs several FTP servers that their 250 customers use to upload and download large graphic files. They wish to move this system to AWS to make it more scalable, but they wish to maintain customer privacy and keep costs to a minimum. What AWS architecture would you recommend?", 

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

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Utilize Amazon Kinesis to collect the inbound sensor data, analyze the data with Kinesis clients and save the results to a Redshift cluster using EMR.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Utilize SQS to collect the inbound sensor data, analyze the data from SQS with Amazon Kinesis and save the results to a Microsoft SQL Server RDS Instance.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Utilize S3 to collect the inbound sensor data, analyze the data from S3 with a daily scheduled Data Pipeline and save the results to a Redshift Cluster.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Utilize EMR to collect the inbound sensor data, analyze the data from EMR with Amazon Kinesis and save the results to DynamoDB.", "IsAnswer": false }]
    } ,
      {
        "Id": 26,
        "Name": "You need a persistent and durable storage to trace call activity of an IVR (Interactive Voice Response) system. Call duration is mostly in the 2-3 minutes timeframe. Each traced call can be either active or terminated. An external application needs to know each minute the list of currently active calls. Usually there are a few calls/second, but once per month there is a periodic peak up to 1000 calls/second for a few hours. The system is open 24/7 and any downtime should be avoided. Historical data is periodically archived to files. Cost saving is a priority for this project. What database implementation would better fit this scenario, keeping costs as low as possible?" , 

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

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create fewer, larger files m Amazon S3.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use smaller instances that have higher aggregate I/O performance.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create more, smaller files on Amazon S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add additional cc2.8xlarge instances by introducing a task group.", "IsAnswer": false }]
    } ,
      {
        "Id": 29,
        "Name": "You are the new IT architect in a company that operates a mobile sleep tracking application. When activated at night, the mobile app is sending collected data points of 1 kilobyte every 5 minutes to your backend. The backend takes care of authenticating the user and writing the data points into an Amazon DynamoDB table. Every morning, you scan the table to extract and aggregate last night's data on a per user basis, and store the results in Amazon S3. Users are notified via Amazon SNS mobile push notifications that new data is available, which is parsed and visualized by the mobile app. Currently you have around 100k users who are mostly based out of North America. You have been tasked to optimize the architecture of the backend system to lower cost. What would you recommend? Choose 2 answers", 

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
        "Name": "Your website is serving on-demand training videos to your workforce. Videos are uploaded monthly in high resolution MP4 format. Your workforce is distributed globally, often on the move and using company-provided tablets that require the HTTP Live Streaming (HLS) protocol to watch a video. Your company has no video transcoding expertise and If required you may need to pay for a consultant. How do you implement the most cost-efficient architecture without compromising high availability and quality of video delivery?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.", "IsAnswer": false }]    
      } ,
      {
        "Id": 32,
        "Name": "You deployed your company website using Elastic Beanstalk and you enabled log file rotation to S3. An Elastic MapReduce Job is periodically analyzing the logs on S3 to build a usage dashboard that you share with your CIO. You recently improved overall performance of the website using CloudFront for dynamic content delivery and your website as the origin. After this architectural change, the usage dashboard shows that the traffic on your website dropped by an order of magnitude. How do you fix your usage dashboard?", 

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

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure each host with an agent that collects all network traffic and sends that traffic to the IDS/IPS platform for inspection.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure an instance with monitoring software and the elastic network interface (ENI) set to promiscuous mode packet sniffing to see all traffic across the VPC.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a second VPC and route all traffic from the primary application VPC through the second VPC where the scalable virtualized IDS/IPS platform resides.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure servers running in the VPC using the host-based 'route' commands to send all traffic through the platform to a scalable virtualized IDS/IPS.", "IsAnswer": false }]

    } ,
      {
        "Id": 34,
        "Name": "You are running a successful multitier web application on AWS and your marketing department has asked you to add a reporting tier to the application. The reporting tier will aggregate and publish status reports every 30 minutes from user-generated information that is being stored in your web application's database. You are currently running a Multi-AZ RDS MySQL instance for the database tier. You also have implemented ElastiCache as a database caching layer between the application tier and database tier. Please select the answer that will allow you to successfully implement the reporting tier with as little impact as possible to your database:", 

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

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use SNS to pass job messages, use CloudWatch alarms to terminate spot worker instances when they become idle. Once data is processed, change the storage class of the S3 object to Glacier.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use SQS for passing job messages, use CloudWatch alarms to terminate EC2 worker instances when they become idle. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Glacier.", "IsAnswer": true }],
            "Explanation":"The question key part to focus on is “and leverage AWS archival storage and messaging services to minimize cost.” For that the storage that is the lowest cost in the answers is Glacier, in addition, the messaging cost is less for SQS then for SNS if they both exceed 1 million transactions which is free. The only answer that satisfies the above two criteria is answer C. Also, there does not seem to be an urgency in speed of messaging therefore SQS satisfies that need. SNS being more real time delivery mechanism."

    }
    ]
}


{
    "quiz": {
        "name": "Exam 1",
        "logo" : "assets/img/EC2.png"
    },
    "questions": [
    {
        "Id": 2,
        "Name": "Simple AD does NOT support MFA, adding additional AD servers, trust relationships and transferring FSMO roles.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 3,
        "Name": "When federating with Active Directory for single-sign on, which of the following is the correct sequence of steps?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1) The user navigates to ADFS webserver, 2) The user enter in their single sign on credentials, 3) The user's web browser receives a SAML assertion from the AD server, 4) The user's browser then posts the SAML assertion to the AWS SAML end point for SAML and the GiveUserSAMLAccess API request is used to request temporary security credentials. 5) The user is then able to access the AWS Console.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1) The user navigates to the AWS console, 2) The user enter in their active directory single sign on credentials in to AWS, 3) The user's web browser receives a SAML assertion from AWS, 4) The user is then able to access the AWS Console.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "1) The user navigates to ADFS webserver, 2) The user enter in their single sign on credentials, 3) The user's web browser receives a SAML assertion from the AD server, 4) The user's browser then posts the SAML assertion to the AWS SAML end point for SAML and the AssumeRoleWithSAML API request is used to request temporary security credentials. 5) The user is then able to access the AWS Console.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "1) The user navigates to ADFS webserver, 2) The user enter in their single sign on credentials, 3) The user's browser then posts the SAML assertion to the AWS SAML end point for SAML and the AssumeRoleWithSAML API request is used to request temporary security credentials. 4) The user's web browser receives a SAML assertion from the AD server. 5) The user is then able to access the AWS Console.", "IsAnswer": false }]
        
    },
    {
        "Id": 4,
        "Name": "What is NTP Amplification?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "When the attacker sends a flood of requests to a target server from multiple machines.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "When the attacker sends a spoofed target return address to an NTP server which responds with large amounts of information.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "When the attacker spoofs the address of an NTP server causing the target to reach a malicious NTP server.", "IsAnswer": false }]
        
    },
    {
        "Id": 5,
        "Name": "To avoid DDoS you should design your infrastructure to scale.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation": "Horizontal scaling is preferred as it will give you time to investigate."
    },
    {
        "Id": 6,
        "Name": "You have to call this API to obtain temporary security credentials when authenticating with external Identity Providers", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "GetRoleWithWebIdentity", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "GetRole", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AssumeRoleWithWebIdentityProvider", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AssumeRoleWithWebIdentity", "IsAnswer": true }]
        
    },
    {
        "Id": 7,
        "Name": "CloudTrail allows you to monitor logs on your AWS EC2 instances and set alarms in response to log monitoring.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": false }],
        "Explanation": "CloudTrail is monitoring for AWS API calls only. You should use CloudWatch if you want to monitor instance logs."
        
    },
    {
        "Id": 8,
        "Name": "Which of the following is true about CloudHSM (Choose 3):", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "It is Single-Tenanted", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Must be used within a VPC", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Is compatible with RDS", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Not compatible with VPC peering", "IsAnswer": false }]
    },
    {
        "Id": 9,
        "Name": "To ensure that your Amazon CloudHSM encryption keys are not lost you must run a cluster (more than one instance).", 
        "Explanation": "sdfdsfsdf",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 10,
        "Name": "To minimize the attack surface area, servers can be placed behind a bastion server through which all traffic has to pass.",
        "Explanation": "There are two issues with this question. One, traffic never flows through a Bastion host. A Bastion host is like a secure control room from which you monitor and command the factory floor. Two, the word ALL should have been a good hint that this is false.",
        "Ref": "https://aws.amazon.com/blogs/security/controlling-network-access-to-ec2-instances-using-a-bastion-server/",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
    },
    {
        "Id": 11,
        "Name": "Federation is defined as:",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Combining or joining a list of users in one domain to users in another domain", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "A service which takes a user from point A and joins it to a user at point B", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A service like Active Directory, Amazon, Google etc.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A user of a service such as Google", "IsAnswer": false }]
    },
    {
        "Id": 12,
        "Name": "An Identity Broker is defined as:",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Combining or joining a list of users in one domain to users in another domain", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "A service which takes a user from point A and joins it to a user at point B", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A service like Active Directory, Amazon, Google etc.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A user of a service such as Google", "IsAnswer": false }]
    },
    {
        "Id": 13,
        "Name": "For which of the following is CloudWatch a good fit? (Choose 3)",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Audit AWS API Calls", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Collect logs from AWS resources", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Monitor AWS resources across multiple AWS accounts", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Monitor CloudTrail", "IsAnswer": true }]
    },
    {
        "Id": 14,
        "Name": "For intrusion detection and prevention, you should use:",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "An IDS", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "An IPS", "IsAnswer": true }],
            "Explanation":"An Intrusion Prevention System will detect AND prevent attacks, where as an Intrusion Detection System will only detect intrusions and alert about them."
    },
    {
        "Id": 15,
        "Name": "Which of the following measure should you take to mitigate against web application DDoS attacks?",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Switch to a backup web server when the attack occurs.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Include a WAF as part of your network infrastructure.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Run multiple instances under different domain names and redirect traffic to the second instance when traffic exeeds capacity on the first instance.", "IsAnswer": false }],
            "Explanation":"A WAF should be used",
            "Ref":"https://d0.awsstatic.com/whitepapers/DDoS_White_Paper_June2015.pdf"
    },
    {
        "Id": 16,
        "Name": "Which of the following describes a Layer 7 attack?",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "When the attacker sends a flood of requests to a target server from multiple machines.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "When the attacker sends a spoofed target return address to an NTP server which responds with large amounts of information.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "When the attacker spoofs the address of an NTP server causing the target to reach a malicious NTP server.", "IsAnswer": false }],
            "Explanation":"Its a flood of requests sent to a target server from multiple machines.",
            "Ref":"https://d0.awsstatic.com/whitepapers/DDoS_White_Paper_June2015.pdf"
    },
    {
        "Id": 17,
        "Name": "Which of the following best describes an Identity Store?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Combining or joining a list of users in one domain to users in another domain", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "A service which takes a user from point A and joins it to a user at point B", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A service like Active Directory, Amazon, Google etc.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A user of a service such as Google", "IsAnswer": true }]
    },
    {
        "Id": 18,
        "Name": "AWS Security Token Service returns what values upon request for a federated token? (Choose 4)",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Access Key ID.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Secret Access Key.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A Token", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "A duration.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "An IAM Role.", "IsAnswer": false }]
    },
    {
        "Id": 19,
        "Name": "To integrate an existing Microsoft Active Directory environment with AWS you can use:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AD Connector", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Simple AD", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Cognito", "IsAnswer": false }]
        
    },
    {
        "Id": 20,
        "Name": "Which of the following is the best candidate for a data store that will be queried using joins?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "RDS", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }]
        
    },
    {
        "Id": 21,
        "Name": "Which of the following is the best option to store blob data?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "RDS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": true }],
            "Explanation":"DynamoDB and some RDS types can store BLOB data, however it is not normally an optimal use from a performance or cost perspective."
        
    },
    {
        "Id": 22,
        "Name": "A great way to preserve the contents of an S3 bucket is to back up the bucket to a bucket owned by another AWS account.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 23,
        "Name": "Enabling multi-AZ will help improve performance on your RDS database,.", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
            "Explanation":"Mutli-AZ RDS deployments use synchronous replication and are designed to be used to introduce data redundancy not to improve performance. To improve performance, setup RDS to use read-replicas.",
            "Ref" :"https://aws.amazon.com/rds/details/read-replicas/"
        
    },
    {
        "Id": 24,
        "Name": "The best option to store index and query focused data is:", 
        
        "Options": [
         { "Id": 1055, "QuestionId": 1010, "Name": "RDS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }]
        
    },
    {
        "Id": 25,
        "Name": "You are working for a scientific research company just outside of Seattle. They decide to make use of AWS spot instances in Paris to process the data collected. The data is collected and reduced at the end of the month. After some discussion and calculation you have determined that you need to move 30 - 35TB per week to AWS. Which strategy would you propose to you CTO", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Set up a 1GB MPLS to Frankfurt and stream the data continually from the science centre to S3", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set up Storage Gateway in Cached mode and use Storage Gateway to replicate the data to S3", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Set up Storage Gateway in Stored mode and use Storage Gateway to replicate the data to S3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Schedule a Snowball every 2 weeks to move that data to Ireland", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Establish a 1GB Direct Connect connection to AWS and stream the data continually from the science centre to S3", "IsAnswer": false }],
            "Explanation":"Moving Data is expensive. Snowballl makes the most sense in this case.",
            "Ref" :"https://aws.amazon.com/about-aws/whats-new/2016/04/announcing-the-new-larger-capacity-80tb-snowball-device/"
        
    },
    {
        "Id": 26,
        "Name": "To stop objects from being deleted from a bucket by the wrong people, you can: (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Disable object deletion", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use bucket policies to restrict deletes", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Enable MFA deletes", "IsAnswer": true }]
        
    },
    {
        "Id": 27,
        "Name": "Once S3 bucket versioning is enabled, you may turn it off again once you have deleted old versions.", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
            "Explanation" :"Once versioning has been enabled on a bucket, it cannot be turned off, only suspended."
        
    },
    {
        "Id": 28,
        "Name": "You have been engaged by a company to design and lead the migration to an AWS environment. One of their current problems is that the on-premises high performance SAN is requiring frequent and expensive upgrades to keep up with the variety of workloads. Working with the Capacity Manager you identify the following Storage types and volumes required: 10 TiB of logs archives retained for legal reason. 300 GiB of VM boot/Data volumes and templates currently requiring 400 IOPS. 900 GiB of modelling data requiring 100,000 Read IOPS, and 90,000 Write IOPS. 500 GiB of image thumbnail that are regenerated on the fly if unavailable. 200 GiB of customer Session State data. 100 GiB of premium customer Session State data that allows customers to restart sessions even if off-line for several days. Which of the following best reflect your recommendation for a cost effective storage allocation. (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB (300 GiB) for the customer Session State data. I2.4xLarge with backup to S3 for the modelling data. Assorted EBS(gp2/io1/std) backed instance as (200 to 400 GiB req’d).", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "S3/Glacier (10 TiB) Life cycle managed for Log archives. S3(RRS) (500 GiB) for the thumbnails. EBS(gp2) (300 GiB) presented as NAS storage for the VM Boot/Data volumes.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "DynamoDB (100 GiB) for the premium customer Session State data. ElastiCache cluster (200 GiB) for the standard customer Session state data. Assorted EBS(gp2/io1/std) backed instance as (200 to 400 GiB req’d). I2.4xLarge with backup to S3 for the modelling data.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3(RRS)/Glacier (10 TiB) Life cycle managed for Log archives. S3(RRS) (500 GiB) for the thumbnails. S3/Glacier (300 GiB) Life cycle managed to self-expire for the VM Boot/Data volumes.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "DynamoDB (100 GiB) for the premium customer Session State data. ElastiCache cluster (200 GiB) for the standard customer Session state data. Assorted EBS(gp2/io1/std) backed instance as (200 to 400 GiB req’d). EBS(io1) (900 GiB) in RAID10 across a cluster of c3.8xLarge with EBS Optimized storage.", "IsAnswer": false },
            { "Id": 1060, "QuestionId": 1010, "Name": "S3/Glacier (10 TiB) Life cycle managed for Log archives. S3(RRS) (500 GiB) for the thumbnails. S3/Glacier (300 GiB) Life cycle managed to self-expire for the VM Boot/Data volumes.", "IsAnswer": true }],
            "Explanation" :"Once versioning has been enabled on a bucket, it cannot be turned off, only suspended.",
            "Ref":"Legal implies durable & secure retention. Modeling data implies high IOPS. Session state implies low latency access and options about persistence. There is a gotcha about how to handle VM Boot volumes (Hint: What do you plan to do with them during & after you have moved to AWS?).You need to practice comparing answers to identify the different elements and eliminate the incorrect ones. This question is long, but the principles of selecting the correct storage are straightforward."
        
    },
    {
        "Id": 29,
        "Name": "What technique can be used to optimize S3 for PUTs?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Upload one large file rather than multiple files.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Split a file up into chunks and upload them separately.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Leverage the BitTorrent capabilities of S3.", "IsAnswer": true }],
            "Explanation":"Multiple smaller sized files uploaded in parallel will utilise more of the available internet connection bandwidth and therefore upload quicker than if the large file was uploaded without being split."
        
    },
    {
        "Id": 30,
        "Name": "To optimize S3 for PUTs we need to try and maximise the connection bandwidth.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
            "Explanation" : "We try to max out the internet connection so that we aren't limited by the S3 single file upload speed and are fully utilising the bandwidth available on our internet connection."
        
    },
    {
        "Id": 31,
        "Name": "S3 is structured lexicographically therefore you should:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Give objects in your bucket similar names.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Give objects in your bucket somewhat different names.", "IsAnswer": true }],
            "Explanation": "To fully leverage S3 performance, you should introduce some randomness into the object names so that they are more likely to be stored on completely different disks and servers in the datacentre.",
            "Ref":"http://docs.aws.amazon.com/AmazonS3/latest/dev/request-rate-perf-considerations.html#workloads-with-mix-request-types"
        
    },
    {
        "Id": 32,
        "Name": "What techniques can be used to optimize S3 for GETs? (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon CloudFront CDN", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Range-based GETs", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Caching via Elasticache", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3 versioning", "IsAnswer":false }],
            "Explanation": "Refer the link for furher info",
            "Ref":"http://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html"
        
    },
    {
        "Id": 33,
        "Name": "To successfully setup a VPC peering connection you must also:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Setup routes and security groups in both VPCs", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Setup a NAT instance to route traffic between the VPCs", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Setup a peered subnet in the peer VPC", "IsAnswer": false }]
        
    },
    {
        "Id": 34,
        "Name": "In order to connect to Amazon S3 via a Direct Connect connection, the connection must be a:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "public VIF connection", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "private VIF connection", "IsAnswer": false }]
        
    },
    {
        "Id": 35,
        "Name": "Which of the follwing is not the correct option for scaling your NAT instance configuration. (Choose 3)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Increasing the EC2 instance size", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Changing the instance family type to one with 'Enhanced Networking'", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Adding another NAT instance and splitting the NAT'd instances across two subnets to allow for the two NAT instances.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Adding another NAT instance and grouping the two NAT instances behind an ELB", "IsAnswer": true }]
        
    },
    {
        "Id": 36,
        "Name": "Which of the follwing is not the correct option for scaling your NAT instance configuration. (Choose 3)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Increasing the EC2 instance size", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Changing the instance family type to one with 'Enhanced Networking'", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Adding another NAT instance and splitting the NAT'd instances across two subnets to allow for the two NAT instances.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Adding another NAT instance and grouping the two NAT instances behind an ELB", "IsAnswer": true }]
        
    },
    {
        "Id": 37,
        "Name": "An instance will have internet access if it is provisioned in a subnet who's VPC has an internet gateway attached so long as the instance has been assigned a public IP address.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"The subnet needs to have an association with the route table containing the route to the gateway before it will obtain internet access."
    },
    {
        "Id": 38,
        "Name": "If you have 3 SSL certificates which you intend to use with Amazon Elastic Load Balancer, how many ELB will you need?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "3", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "0", "IsAnswer": false }],
        "Explanation":"Unless you have a wildcard certificate, you will need to install the different SSL certificates on different load balancers. See also using SSL certificates with CloudFront"
    },
    {
        "Id": 39,
        "Name": "Which of the following is correct for CGW and VPG?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Client Gateway and Virtual Private Gateway", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Customer Gateway and Virtual Private Gateway", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Customer Gateway and Virtual Public Gateway", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Client Gateway and Virtual Publick Gateway", "IsAnswer": false }]
    },
    {
        "Id": 40,
        "Name": "Which of the following is the best way to handle a private subnet that is accessing the internet through a NAT instance and experiencing bandwidth bottlenecks? (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Add another NAT instance", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Increase the instance size of the NAT instance", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Add another internet gateway to the NAT instance subnet", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Convert the NAT instance to a NAT gateway", "IsAnswer": true }],
        "Explanation":"See link for further information",
        "Ref":"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-comparison.html"
    },
    {
        "Id": 41,
        "Name": " An instance was working fine with it's DHCP address, however with a manually set IP address of 10.2.5.191 if cannot connect to the network. The subnet is defined as 10.2.5.128/26 (10.2.5.128 - 10.2.5.191). What is most likely the cause of the problem?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "/26 is not a permitted CIDR block size.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You need to add a specific route to the subnet route table for manually created IP addresses", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You have forgotten to disable the 'source/destination checks' on the instance.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The address 10.2.5.191 is one of the AWS reserved IP addresses.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "You have forgotten to set the Security Group on this instance", "IsAnswer": false }],
        "Explanation":"AWS reserves the FIRST four addresses and LAST one address of the CIDR block. A CIDR block does not always start at 0 or end at 255.",
        "Ref":"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html"
    },
    {
        "Id": 42,
        "Name": "Amazon Direct Connect is available in the following speeds; (Choose 3)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Sub 1 Gbps", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "1 Gbps", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 Gbps", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "100 Gbps", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "1000 Gbps", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    },
    {
        "Id": 43,
        "Name": "Which of the following support high performance networking (Choose 6)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "T2", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "C3", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "C4", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "D2", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "I2", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "M2", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "M4", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "R3", "IsAnswer": true }],
        "Explanation":"",
        "Ref":""
    },
    {
        "Id": 44,
        "Name": "A placement group cannot span subnets", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"A placement group can span over multiple subnets so long as they are in the same availability zone and VPC. There are special constraints when used with VPC peering."
    },
    {
        "Id": 45,
        "Name": "Direct Connect is not redundant. (T/F)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"Direct Connect has internal fault tolerant links to multiple AZ's for maintenance, but is not inherently redundant. To add redundancy you can setup a second Direct Connect or setup a site to site VPN connection.",
        "Ref":"https://aws.amazon.com/directconnect/faqs/"
    },
    {
        "Id": 46,
        "Name": "What is the maximum number of internet gateways that can be attached to a VPC", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4", "IsAnswer": false }]
    },
    {
        "Id": 47,
        "Name": "Which of these are true? (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Subnets can span across availability zones", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Security groups can span across availability zones", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Subnets cannot span across availability zones", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Security groups cannot span across availability zones", "IsAnswer": false }]
    },
    {
        "Id": 48,
        "Name": "In EC2-Classic, Elastic Load Balancer supports using ports:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1-65535", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1024-65535", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "80, 443, 1024-65535", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "25, 80, 443, 465, 587, 1024-65535", "IsAnswer": true }],
        "Explanation":"ELB Listener ports are different between EC2-Classic and EC2-VPC. Correct answer is: 25, 80, 443, 465, 587, 1024-65535",
        "Ref":"http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html"
    },
    {
        "Id": 49,
        "Name": "You have 3 VPCs with CIDR blocks, A: 10.0.0.0/16, B: 10.0.0.0/16, C: 192.168.0.0/16. Which VPC's can be peered? (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A and B", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A and C", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "B and C", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
        "Explanation":"Peered VPCs must have different CIDR blocks so that they do not overlap. Obviously the answer 'None of the above' doesn't even make sense as an option in this case."
    },
    {
        "Id": 50,
        "Name": "VPC peering can be established between any VPC in any other AWS region", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"VPC peering is currently only allowed between VPCs in the same region."
    },
    {
        "Id": 51,
        "Name": "Source/Destination Check should be enabled on the NAT instance.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"The NAT instance must be able to send/receive traffic that does not have a source/destination of itself."
    },
    {
        "Id": 52,
        "Name": "In a VPC configured to use dedicated tenancy, all instances created, even those selected for shared tenancy will be created on dedicated hardware.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"See link for information.",
        "Ref" :"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html#creatingdedicatedvpc"
    },
    {
        "Id": 53,
        "Name": "Opsworks allows you to run Code deployments, Software Configurations, Database Setups, Infrastructure Provisioning and Server Scaling using Chef", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 54,
        "Name": "CloudFormation supports the creation of wait conditions so that certain provision steps can be executed upon a condition being met elsewhere.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"See link for information.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html"
    },
    {
        "Id": 55,
        "Name": "CloudFormation uses a structured text format files to pass instructions to the AWS build services. Which of the following are true statements ? (Choose 3)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "When re-using a template in a different Region local values are passed via the CloudFormation Designer console.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Beanstalk configuration inclusion is a 'Mapping' in CloudFormation.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Resources: is a mandatory section of the Template", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "BASH, CMD and PowerShell scripts can be passed as UserData to EC2 instances in the CloudFormation template.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "The 1st and last character of a Template must be a square bracket indicating a list of related data", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "The 1st and last character of a Template must be a curly bracket indicating a group of related data", "IsAnswer": true },
                { "Id": 1060, "QuestionId": 1010, "Name": "CloudFormation allows for 75 Output values", "IsAnswer": false }],
        "Explanation":"CloudFormation is a feature filled services that allow configuration to be passed by various means. Elastic Beanstalk configurations can be passed, but as a resource type. The format is very specific as are the required sections of the template.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html"
    },
    {
        "Id": 56,
        "Name": "Using Elastic Beanstalk you can (select all that apply): (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Deploy an opsworks stack.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Deploy an auto-scaling application.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Deploy an RDS instance.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Deploy a Cognito user pool", "IsAnswer": false }]
    },
    {
        "Id": 57,
        "Name": "Your company has a large distributed, and manually managed, test environment. For historic reasons the environment is spread over a mixture of hosting providers, and there is now a desire to combine this all in one AWS Region. The main hosting is provided by; AWS, on-premises physical servers, and hosted VMware & Hyper-V. You have been given an opportunity to pitch for your approach during the brief 2 minute elevator ride between meetings. Which of these describes how you would propose to integrate these all into a single automated AWS solutions.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Make use of CloudFormer to construct a CloudFormation template of each of the environments and then merge the templates into a single hierarchy to pass parameters between the templates and allow automated creation of all or portions of the final environment. Advise that the process is fast and will require little customization before it can be utilized.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Working with the DevOps team, make use a Physical-to-Virtual conversion tool to convert the simple physical servers into VMs. Then use the VM Import/Export Tool to import these VMs along with the existing VMware and Hyper-V VMs into AWS. The large, or highly customized, or out-of date servers would need to be manually recreated based on standard AMIs with the application deployment captured in Chef or other automation scripts. Make use of CloudFormer to construct one or more CloudFormation template(s) of the instances and services. Within the templates some rework would be needed to script dependencies and parameters to support full automation.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Work with the operations team to catalogue all the existing servers and applications and map them to standard instance types. Recreate each server as an EC2 instance and image to create an AMI for each. Create a CloudFormation template of the instances and relationships so that the new environment can be deployed in any region.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Working with the Dev team make use of OpsWorks and clone each of the servers in all the environments. Convert the clones to OpsWorks/Chef definitions and combine into one or more CloudFormation template(s) with required parameters and dependency definitions. Advise that the process is fast and will require little customization before it can be utilized.", "IsAnswer": false }],
        "Explanation":"Migrations is often a complex process and there is rarely one tool fits all the problems. Care needs to be taken to pick the right approach for each problem while still trying to end up with a consistent and improved situation. Making an single hierarchy would not be effective long term for a test environment. making an AMI of each server would create a larger maintenance overhead as each server would be bespoke, rather than standard with a small amount of app customization. No migration like this is ever fast and easy.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-using-cloudformer.html"
    },
    {
        "Id": 58,
        "Name": "To make sure that certain items are not deleted upon a cloudformation stack being deleted, you can:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Manage those resources separately to cloudformation.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a deletion policy on those resources.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Disable the 'Delete on Termination' flag", "IsAnswer": false }],
        "Explanation":"See link for information.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"
    },
    {
        "Id": 59,
        "Name": "The mandatory items in a CloudFormation Template are:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "List of AWS resources and their configurations, input values.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Template's file format and version number, input values.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "List of AWS resources and their configurations.", "IsAnswer": true }],
        "Explanation":"See link for information.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html"
    },
    {
        "Id": 60,
        "Name": "An AWS stack can be updated and version controlled just as you would other code.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 61,
        "Name": "When a CloudFormation stack provisioning error occurs, it will:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Rollback (delete) any provisioned resources.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Provisioned resources will continue to run, and will need to be manually removed.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Continue provisioning the remaining resources and notify of the error that occurred.", "IsAnswer": false }],
        "Explanation":"Failed stack creation will result in a rollback of all provisioned resources, including those that were created successfully. You will be charged for any resources created.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html"
    },
    {
        "Id": 62,
        "Name": "Which of the following can be used to output data from Cloud Formation?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Fn:GetAtt", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Fn:Get", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Func:GetAtt", "IsAnswer": false }]
    },
    {
        "Id": 63,
        "Name": "Elastic Beanstalk is a good tool for sys admins who do not have much AWS experience.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": false }],
        "Explanation":"Elastic Beanstalk is a good tool for Developers who do not have much AWS experience."
    },
    {
        "Id": 64,
        "Name": "When updating the application or configuration in an Elastic BeanStalk environment what will the impact to the environment be ?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Elastic Beanstalk gives Dev or Ops control over the rate of changes. Where possible AWS builds and cuts over to the new service before deleting the old service. The update starts immediately on submission of the instruction.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "All code releases and configuration changes require a short but complete outage as the traffic is shifted from the old environment to the new.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Beanstalk gives Dev or Ops control over the time and rate of changes. Where possible AWS builds and cuts over to the new service before deleting the old service.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Beanstalk gives Dev or Ops control over the rate of changes. Where possible AWS builds and cuts over to the new service before deleting the old service. The update starts immediately on submission of the instruction. However the update can submitted in a 'suspended' state and left released at an appropriate time.lse", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Like CloudFormation, all application and configuration updates are seamless and non impacting", "IsAnswer": false }],
        "Explanation":"Elastic Beanstalk offers a number of important controls to avoid business impact of code pushes. However it is still the responsibility of the individual to ensure that the timing is appropriate and the impact is understood.",
        "Ref" :"http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-updating.html"
    },
    {
        "Id": 65,
        "Name": "What Opswork terminology would you use to refer to your database in the context of your application.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Stack", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Layer", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Template", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Section", "IsAnswer": false }]
    },
    {
        "Id": 66,
        "Name": "CloudFormation does not have built-in support for provisioning the application layer.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"CloudFormation does have support for Chef and Puppet which allows you to provision your application layer. It also has the ability to utilise the bootstrap scripts for EC2 instance provisioning.",
        "Ref" :"https://aws.amazon.com/cloudformation/aws-cloudformation-articles-and-tutorials/"
    },
    {
        "Id": 67,
        "Name": "You cannot create multiple VPC's within one CloudFormation Template", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
    },
    {
        "Id": 68,
        "Name": "A CloudFormation Template is:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "A collection of provisioned resources in AWS which you can copy.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "A plan for what resources make up a CloudFormation stack.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "A collection of provisioned resources in AWS.", "IsAnswer": false }]
    },
    {
        "Id": 69,
        "Name": "You are the AWS specialist in a small development company. At 4pm on Friday you are called in to an urgent meeting where you have been advised that your team needs to demonstrate a working POC to an important customer at noon on Monday. A key feature the app needs to demonstrate is to scale to manage massive traffic as a result of a blitz advertising campaign involving; radio, social media and TV to cover as many demographics as possible. The development team say that they can have the app and load generating rig ready by Monday morning. However they will need multiple environments for testing plus the final one to running the demo. They say that they will need need a fast scaling web & app server farms, DynamoDB, ElastiCache, SQS, load balancers and an RDS database. What is your plan to deliver these in the time provided ?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Ask the development team to mock up the development environments on their workstations using the workstation version of DynamoDB. Advise that you will work through the night to build a small DynamoDB instance and the fleets of EC2 instances with all the necessary security and associate them with a Load Balancer. This will be available late Saturday for testing. Negotiate to have the 4 hours before the demo on Monday to refresh the environment, build a full sized version of the DynamoDB & RDS instances and load the new App on the servers.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Propose that the development team to hold off until you work through the night to build a CloudFormation definition of the required environments. Provide that environment to the dev team as a test lab while you copy the Template, AMIs, and sample data to other regions to use as alternate test platforms. Ask the team to deploy to 'Master' instances that you can image into a fully functional AMI to be used for incremental testing and as the basis of the finally Launch Configuration for the Demo version.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Set up a set of IAM accounts for the developers. Use the Console to create Elastic Beanstalk environments with the standard elements, and reference CloudFormation templates for non-standard resources. Teach the dev leads to push the app build from Git to the Elastic Beanstalk and spin up test instances with all the core services identified as needed. Work in parallel with the dev team to build basic security using VPC Security Groups & network ACLs. Two hours before demo time freeze one of the stable test environments and walk your spokesperson through the demo.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Set up a set of IAM accounts for the developers. Use the Console to create Elastic Beanstalk environments with the standard elements, and hand craft the non-standard resources definitions as YAML config files. Teach the dev leads to push the App build from Git to the Elastic Beanstalk and spin up test instances with all the core services identified as needed. Work in parallel with the dev team to build basic security using VPC Security Groups & network ACLs. Two hours before demo time freeze one of the stable test environments and walk your spokesperson through the demo.", "IsAnswer": true }],
        "Explanation":"Know the right tool for the job. Empower people to do those tasks they can.",
        "Ref" :"https://www.slideshare.net/AmazonWebServices/aws-january-2016-webinar-series-managing-your-infrastructure-as-code"
    },
    {
        "Id": 70,
        "Name": "Using CloudFormation you MUST ensure that the order of provisioning is set in your script, or the stack will fail to be provisioned.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"CloudFormation will automatically work out the provisioning order based on dependencies for each resource.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"
    },
    {
        "Id": 71,
        "Name": "Elastic Beanstalk does not support running multiple environments for a single application.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
    },
    {
        "Id": 72,
        "Name": "CloudFormation allows you to script the AWS code.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"CloudFormation allows you to script your AWS infrastructure as code. You don't have access to the AWS's underlying code."
    },
    {
        "Id": 73,
        "Name": "When configuring consolidated billing, the root/paying account should not... (Select all that apply) (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "be configured to use a different payment method to the linked accounts.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "have unused AWS credits.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "be used to provision AWS services such as EC2 instances.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "have a root account that hasn't had MFA configured.", "IsAnswer": true }],
        "Explanation":"The paying account in a consolidated billing configuration should only be used for managing billing and should have Multi-Factor Authentication configured on the root account.",
        "Ref":"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"
    },
    {
        "Id": 74,
        "Name": "You have 20 M3.Large Reserved Instances in the us-west-1a Availability Zone and you need to introduce multi-AZ redundancy to your cloud compute infrastructure. To do this, you submit a Reserved Instances modification request to split your 20 reserved instances across the us-west-1a and us-west-1c Availability Zones. How many new Reserved Instance Requests are created?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "None, this is a reserved instance modification request.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Two, a new Reserved instance request is created for 10 M3.Large in us-west-1a and another request is created for 10 M3.Large instances in us-west-1c.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "One, a new request is created in the us-west-1c Availability Zone for 10 M3.Large instances.", "IsAnswer": false }],
        "Explanation":"When you have an existing reserved instances allocation and you submit a modification request to split the footprint across multiple AZ, new Reserved Instance requests are created in each AZ to match the new footprint requirements.",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html"
    },
    {
        "Id": 75,
        "Name": "In configuring Cross Account Access, which of the following presents the the necessary steps in the correct order?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an IAM Role with cross account access, grant user access to the role, create a custom policy, apply custom policy to the role and note down ARN, and switch to the role.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a custom policy, create an IAM Role with cross account access, apply custom policy to the role and note down ARN, grant user access to the role, and switch to the role.", "IsAnswer": true }],
        "Explanation":"The custom policy needs to be created before the role, so that that the policy is available to be applied to the role.",
        "Ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html"
    },
    {
        "Id": 76,
        "Name": "If you have a total Reserved Instances footprint of 32 made up of two M3.2xLarge, which two of the following modification requests would be valid? (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Three M3.xlarge instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Four M4.xlarge instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Eight M3.large instances", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Sixteen M3.medium instances", "IsAnswer": true }],
        "Explanation":"The footprint of the modification request should be equal to the footprint of the original Reserved Instances footprint and the instances should be of the same family as the original reserved instances. The size of the footprint is measured in units and is calculated using the Normalization factors for each instance size.",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modification-instancemove.html"
    },
    {
        "Id": 77,
        "Name": "You have 3 AWS accounts linked to use consolidated billing. Account 1 has 50TB of data stored using S3, Account 2 has 300TB and Account 3 has 100TB. All storage is standard storage and located in US East (N. Virginia). How much per month do you pay in storage costs only?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "$13,126.50 per month", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "$13,500.00 per month", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "$13,101.00 per month", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "$13,075.50 per month", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "$13,050.00 per month", "IsAnswer": false }],
        "Explanation":"Consolidated billing can allow you to take advantage of volume pricing discounts, in this scenario, the total sum of storage used across the 3 accounts is 450TB. The first TB is charged at $0.0300/GB, the next 49TB is $0.0295/GB, and the remaining 400TB is charged at $0.0290/GB. By consolidating the accounts, the cheaper rates are leveraged more often than if the accounts are considered separately.",
        "Ref":"https://aws.amazon.com/s3/pricing/"
    },
    {
        "Id": 78,
        "Name": "You can configure AWS CloudTrail at the paying account level by configuring an S3 bucket and configuring CloudTrail on linked accounts to put logs in the paying account's S3 bucket.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 79,
        "Name": "What is a tag used for in AWS? Select all that apply. (Choose 3)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Tags help you to identify the price of an AWS offering.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Tags are used to name a resource in AWS", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Tags are a key-value pair used to identify resources on AWS.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Tags can be used to group resources in AWS by department (e.g. development, testing)", "IsAnswer": true }],
        "Explanation":"Tags are a multi-purpose method for tracking and labelling resources across the AWS offerings. They are in the form of key-value pairs and can either be manually assigned or automatically assigned by other services such as Elastic Beanstalk."
    },
    {
        "Id": 80,
        "Name": "You have 2 AWS accounts linked to use consolidated billing. Account 1 has 4 EC2 T2.Small instances running, Account 2 has 2 EC2 T2.Small instances running and has 4 T2.Small Reserved Instances capacity. Assuming all the instances are in the same availability zone, how many on-demand instances do you have to pay for?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "4", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "6", "IsAnswer": true }],
        "Explanation":"Savings for unused Reserved Instances in one AWS account are applied to compatible instances running in other consolidated billing linked accounts."
    },
    {
        "Id": 81,
        "Name": "You have Reserved Instances of type M3.large running RedHat. You submit a modification request to change your reserved instances to two M3.medium and it's rejected. Why?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "You have not calculated the footprint of your reserved instances correctly meaning the request is not compatible.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "You cannot modify a reserved instance type running the platform RedHat.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "The instance family M3 does not have a medium size offering.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "You have mistakenly put through a request which asks for a modification between instance families.", "IsAnswer": false }],
        "Explanation":"Reserved instance modifications are only available for linux type instances excluding RedHat and SUSE.",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html"
    },
    {
        "Id": 82,
        "Name": "You have multiple AWS accounts linked to a paying account to make use of consolidated billing. You would like to receive an alarm when your total expenses for all accounts exceeds $1000 for a billing cycle. You will need to do which of the following?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure the same billing alert in each of the accounts you would like to monitor.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure a billing alert in the paying account.", "IsAnswer": true }],
        "Explanation":"Once consolidated billing is configured, you may configure billing alerts in the paying account and the alert will be applied to the total cost from all the linked accounts. Billing alerts can still be configured for a specific account if you only require that alert to be applied to that account.",
        "Ref":"https://aws.amazon.com/about-aws/whats-new/2012/10/19/announcing-aws-billing-alerts-for-linked-accounts/"
    },
    {
        "Id": 83,
        "Name": "You require compute resources to run an application server for an ongoing basis. What is the most cost-effective EC2 pricing option for this job?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "On-Demand Instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Spot Instances + On-Demand Instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Reserved Instances (3 year contract)", "IsAnswer": true }],
        "Explanation":"For servers that need to be available all the time and will be continuously running at a known capacity, reserved instances will be the most cost-effective pricing option."
    },
    {
        "Id": 84,
        "Name": "The M3 and M4 instance families are memory optimised instances for use in memory intensive scenarios.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"M3 and M4 are the main general purpose compute instance families. The R3 instance family is a memory optimised instance type. An easy way to remember this is to remember that the 'R' in R3 stands for RAM."
    },
    {
        "Id": 85,
        "Name": "From the consolidated billing paying account you can provision services such as EC2 instances in one of the linked accounts.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Consolidated billing is not concerned with provisioning of AWS services in linked accounts and you cannot provision services on the linked accounts from the paying account."
    },
    {
        "Id": 86,
        "Name": "You require additional compute resources to run over the weekend and carry the additional load that the system will be under due to an online sale your company is running. What is the most cost-effective EC2 pricing option for this job?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "On-Demand Instances", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Spot Instances + On-Demand Instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Reserved Instances (3 year contract)", "IsAnswer": false }],
        "Explanation":"On-Demand instances are an appropriate choice for short-lived but high-availability compute requirements."
    },
    {
        "Id": 87,
        "Name": "You are in charge of managing the AWS resources used within your company. One of the requirements is that you are able to identify all the resources being used by different teams such as development, and quality assurance teams. How would you achieve this?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "By having each of the teams assign a tag (eg. Department: Development) to any resource they provision and then configuring a resource group to see all resources with that tag.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "By requiring each team keep a detailed spreadsheet of each resource ARN they maintain and submit it daily to you via email.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "By enabling CloudTrail and running monitoring on the logs to find out which IAM user has provisioned each resource so they can be matched up to a team directory which is kept in a database.", "IsAnswer": false}],
        "Explanation":"Resource Groups are an easy way to view related resources and the results can also be exported in CSV format for use in external systems."
    },
    {
        "Id": 88,
        "Name": "Tag editor can be used to find untagged resources and to quickly and easily manage tags across the entire AWS account.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"The tag editor is a helpful tool to centrally manage the tags assigned to resources in your AWS account. This is especially useful for finding resources that are untagged or for making bulk-changes to tags."
    },
    {
        "Id": 89,
        "Name": "You require compute resources to perform a once-off processing of a large dataset which has to be processed within a week. What is the most appropriate cost-effective EC2 pricing option for this job?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "On-Demand Instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Spot Instances + On-Demand Instances", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Reserved Instances (3 year contract)", "IsAnswer": false }],
        "Explanation":"Spot instances are a cost-effective option for once-off compute requirements and can be accompanied with on-demand instances if there is a time-requirement."
    },
    {
        "Id": 90,
        "Name": "AWS Import/Export can be used to export data from which of the following?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "S3, EBS and Glacier", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "S3 and Glacier", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "S3 only", "IsAnswer": true }],
        "Explanation":"Data that requires exporting will need to be moved to S3 first. Note that Import/Export SnowBall has slightly different options from Import/Export Disk",
        "Ref":"https://aws.amazon.com/documentation/importexport/"
    },
    {
        "Id": 91,
        "Name": "Storage Gateway traffic can be throttled.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"See link for information",
        "Ref":"https://aws.amazon.com/storagegateway/faqs/"
    },
    {
        "Id": 92,
        "Name": "The Warm Standby DR strategy involves:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Creating all the required infrastructure resources on AWS in response to a failure.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Maintaining a separate complete production-ready replica of your system.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Creating and running a production replica on minimal hardware including database replica and instances and scaling it up in the event of a failure to use for production.", "IsAnswer": true }],
        "Explanation":"The Warm Standby DR strategy is a quicker response time due to the always running (warm) backup system. This offers better RTO and RPO than the Pilot Light and Backup and Restore strategies.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-disaster-recovery.pdf"
    },
    {
        "Id": 93,
        "Name": "When using AWS Import/Export to export from a versioned S3 bucket, all versions will be exported.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Only the most recent version will be exported from S3 using AWS Import/Export.",
        "Ref":"https://aws.amazon.com/snowball/disk/"
    },
    {
        "Id": 94,
        "Name": "Snapshots can be created of your gateway-cached and gateway-stored volumes.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 95,
        "Name": "What ports are required to be open to run Storage Gateway on-premise?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "443 inbound, 80, 3260 and UDP 53 outbound", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "80 inbound, 443, 3260 outbound", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "80, 443, and UDP 53 outbound", "IsAnswer": false }],
        "Explanation":"Port 80 is only needed for activation and can be closed once that's complete.",
        "Ref":"http://docs.aws.amazon.com/storagegateway/latest/userguide/Requirements.html"
    },
    {
        "Id": 96,
        "Name": "RDS snapshots in a multi-AZ configuration are taken from which of the following?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Primary database instance", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Secondary database instance", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Either the primary, or secondary database instance depending on which is under the least load", "IsAnswer": true }],
        "Explanation":"Multi-AZ database snapshots are always taken from the secondary instance to avoid placing IO load on the primary instance."
    },
    {
        "Id": 97,
        "Name": "Virtual tape storage retrieval is always instantaneous", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Virtual tape storage retrieval is only instantaneous for Virtual Tape Library retrievals. Virtual Tape Shelf retrievals can take up to 24 hours."
    },
    {
        "Id": 98,
        "Name": "", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"",
        "Ref":""
    },
    {
        "Id": 99,
        "Name": "Read replicas are available across different regions for which of the following?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "MySQL only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "MariaDB only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "PostgreSQL only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "SQL Server only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "PostgreSQL and MariaDB only", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "MariaDB and MySQL only", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "MySQL and PostgreSQL", "IsAnswer": false }],
        "Explanation":"AWS is constantly upgrading services. At this time Read Replica Across Regions are only available for MySQL and MariaDB.",
        "Ref":"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html"
    },
    {
        "Id": 100,
        "Name": "In the Pilot Light recovery strategy, the system could be failed-over by using: (select all that apply) (Choose 3)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "An external monitoring tool and script to modify the DNS records", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Route53", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Manual failover", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }],
        "Explanation":"The mechanism for failover is completely up to your business and will need to adhere to your RTO and RPO requirements."
    },
    {
        "Id": 101,
        "Name": "You can force an RDS Multi-AZ failover by rebooting one of the instances.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"Forcing a failover can be done by restarting the primary instance via either the console or the RebootDBInstance API call.",
        "Ref":"http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html"
    },
    {
        "Id": 102,
        "Name": "If you delete an RDS instance, all backups will be deleted.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Only automated backups will be deleted if you delete an RDS instance, manual backups will be retained."
    },
    {
        "Id": 103,
        "Name": "If you require a tape storage solution which supports unlimited virtual tapes, what service would you use?", 
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "A virtual tape shelf", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "A virtual tape library", "IsAnswer": false }],
        "Explanation":"Virtual tape shelves are stored on Amazon Glacier and allow you to have unlimited virtual tapes. Virtual Tape Libraries are stored on Amazon S3 and support up to 1500 Virtual Tapes."
    },
    {
        "Id": 104,
        "Name": "RDS read replicas are supported with the following database engines:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"",
        "Ref":""
    },
    {
        "Id": 105,
        "Name": "Which of the following best describes the Recovery Time Objective (RTO) ?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "The amount of time it takes to recover a file from Amazon Glacier Storage.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The amount of time Amazon guarantees to repair outages in the event of the loss of an availability zone.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The amount of time that it takes for your business to recover from an outage or disruption.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "The maximum period of time in which data might be lost from an IT service due to a major incident", "IsAnswer": false }],
        "Explanation":"RTO can include the time to fix the problem without a recovery, the recovery itself, testing and communication to users."
    },
    {
        "Id": 106,
        "Name": "The Pilot Light strategy will usually include a database server and AMI's as it's core.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"A replicated database would be kept in AWS to use in the event of an onsite failure and AMI's for application servers or webhosts."
    },
    {
        "Id": 107,
        "Name": "Vertical scaling is preferred for a Warm Standby DR strategy.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Horizontal scaling is preferred as it avoids the need for downtime while restarting instances in a vertical scaling setup."
    },
    {
        "Id": 108,
        "Name": "RDS allows you to replicate your data by: (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Creating a snapshot of your database", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Saving a database export to Amazon S3 using the console", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Creating a read replica running in another region", "IsAnswer": true }],
        "Explanation":"",
        "Ref":""
    },
    {
        "Id": 109,
        "Name": "In addition to the base on-premise system requirements, which of the following does the gateway-stored volume require you to have?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Enough local storage to hold the amount of cache that you require plus an amount of storage as an upload buffer.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "An equal amount of storage as that of your entire dataset plus an upload buffer.", "IsAnswer": true }]
    },
    {
        "Id": 110,
        "Name": "How much times does retrieval from Amazon Glacier take?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "less than 1 hour maximum", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "2 - 4 hours", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "3 - 12 hours", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "3 or more hours", "IsAnswer": true }],
        "Explanation":"Amazon Glacier data retrievals typically take 3 - 5 hours but can take longer than that.",
        "Ref":"https://aws.amazon.com/glacier/faqs/#data-retrievals"
    },
    {
        "Id": 111,
        "Name": "Using which of the following can you scale an RDS instance?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Setting up read replicas of your database", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configuring your database to be multi-AZ", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "By adding new RDS instances and always writing to both databases from your application", "IsAnswer": false }],
        "Explanation":"Read replicas leverage built-in database engine data replication functionality to scale elastically for read-heavy applications. If write performance is the limitation you will need to look at upgrading to a larger instance size, or sharding, or a different solution. Multi-AZ will improve fault tolerance but will not improve performance.",
        "Ref":"https://aws.amazon.com/rds/details/read-replicas/"
    },
    {
        "Id": 112,
        "Name": "Multi-AZ is one type of database scaling.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"Multi-AZ is not a form of database scaling. It is a mechanism for data redundancy only."
    },
    {
        "Id": 113,
        "Name": "Which of the following best describes the Recovery Point Objective (RPO)?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "The amount of time that it takes for your business to recover from an outage or disruption.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "A standards compliant point value which indicates the risk of having to perform a recovery due to a disruption.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The maximum time between a disruption and the most recent data recovery point.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The maximum duration of time of which data might be lost from an IT service due to an incident.", "IsAnswer": true }],
        "Explanation":"How much data can your organisation lose? One hour, A day, none at all?",
        "Ref":"https://media.amazonwebservices.com/AWS_Disaster_Recovery.pdf"
    },
    {
        "Id": 114,
        "Name": "RDS automated backups are available for MySQL only if you are not using InnoDB", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"RDS automated backups for MySQL are only available if you are using InnoDB"
    },
    {
        "Id": 115,
        "Name": "Backup and Restore is the least expensive DR scenario", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"Backup and Restore is the least expensive way.  However it results the largest RTO and RPO for your business.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-disaster-recovery.pdf"
    },
    {
        "Id": 116,
        "Name": "if you create a volume from an EC2 incremental snapshots,it will contain the base snapshot data plus any incremental changes up to that point in time.", 
        
        "Options": [
               { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"Snapshots are incremental. See link for further information",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html"
    },
    {
        "Id": 117,
        "Name": "If you need to backup 500PB of on-premises data to Amazon S3, the best transfer options are: (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "HTTP upload to S3 via the API", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "AWS Import/Export Disk", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS Direct Connect", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "AWS Snowball", "IsAnswer": true }],
        "Explanation":"For large data backups to S3, AWS Import/Export Disk or Snowball is going to be the cheapest and potentially the fastest option.",
        "Ref":"https://aws.amazon.com/blogs/aws/aws-importexport-snowball-transfer-1-petabyte-per-week-using-amazon-owned-storage-appliances/"
    },
    {
        "Id": 118,
        "Name": "RDS Multi-AZ data replication is", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Synchronous", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Asynchronous", "IsAnswer": false }],
        "Explanation":"Multi-AZ replication is always synchronous unlike cross region read replicas which are asynchronous.",
        "Ref":"https://aws.amazon.com/rds/details/multi-az/"
    },
    {
        "Id": 119,
        "Name": "ElastiCache snapshots will degrade performance on your cache cluster.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"The entire cluster is snapshotted and therefore performing a snapshot will degrade performance and should be done during the least busy period."
    },
    {
        "Id": 120,
        "Name": "AWS DynamoDB does not allow you to replicate data across regions.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"DynamoDB does allow you to replicate data across regions using streams. See the link for more information.",
        "Ref":"http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.CrossRegionRepl.html"
    },
    {
        "Id": 121,
        "Name": "What are the hardware requirements for your Storage Gateway on-premise hardware?(Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "4vCPUs, 7.5GB of RAM, 75GB VM image and system data", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "8vCPUs, 4GB of RAM, 75GB VM image and system data", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "4vCPUs, 7.5GB of RAM, 50GB VM image and system data", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "8vCPUs, 7.5GB of RAM, 75GB VM image and system data", "IsAnswer": true }],
        "Explanation":"On-premise Storage Gateway Virtual Machine requirements are 4 or 8vCPUs, 7.5GB of RAM and 75GB of VM image and system data storage."
    },
    {
        "Id": 122,
        "Name": "S3 standard storage provides a durability of:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "99.99%", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "99.9999%", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "99.999999999%", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "99.99999999999%", "IsAnswer": false }],
        "Explanation":"Objects are stored redundantly across multiple devices within a region to provide a high level of durability.",
        "Ref":"https://aws.amazon.com/s3/faqs/"
    },
    {
        "Id": 123,
        "Name": "AWS Import/Export Disk data encryption is optional for", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Imports and exports", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Imports only", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Exports only", "IsAnswer": false }],
        "Explanation":"Import/Export Snowball has different requirements"
    }
     ]
}
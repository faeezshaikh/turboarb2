{
    "quiz": {
        "name": "Exam 2",
        "logo" : "assets/img/VPC.png"
    },
    "questions": [
      {
        "Id": 28,
        "Name": "You require the ability to analyze a large amount of data which is stored on Amazon S3 using Amazon Elastic MapReduce. You are using the cc2.8xlarge instance type, whose CPUs are mostly idle during processing. Which of the below would be the most cost efficient way to reduce the runtime of the job?", 
        "Tag":"???",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create fewer, larger files m Amazon S3.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use smaller instances that have higher aggregate I/O performance.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create more, smaller files on Amazon S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add additional cc2.8xlarge instances by introducing a task group.", "IsAnswer": false }]
    } 
 
    ,
     {
        "Id": 40,
        "Name": "You are designing a connectivity solution between on-premises infrastructure and Amazon VPC. Your servers on-premises will be communicating with your VPC instances. You will be establishing IPsec tunnels over the Internet. You will be using VPN gateways, and terminating the IPsec tunnels on AWS supported customer gateways. Which of the following objectives would you achieve by implementing an IPsec tunnel as outlined above? Choose 4 answers", 
        "Tag":"CloudMigration",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Peer identity authentication between VPN gateway and customer gateway.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "End-to-end identity authentication.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Data integrity protection across the Internet.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "End-to-end protection of data in transit.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Data encryption across the Internet.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Protection of data in transit over the Internet.", "IsAnswer": true }]
    } 
   
    ,
     {
        "Id": 43,
        "Name": "Your company policies require encryption of sensitive data at rest. You are considering the possible options for protecting data while storing it at rest on an EBS data volume, attached to an EC2 instance. Which of these options would allow you to encrypt your data at rest? Choose 3 answers", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Implement third party volume encryption tools", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Implement SSL/TLS for all services running on the server", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Encrypt data inside your applications before storing it on EBS", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Encrypt data using native data encryption drivers at the file system level", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Do nothing as EBS volumes are encrypted by default", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 45,
        "Name": "You are designing a social media site and are considering how to mitigate distributed denial-of- service (DDoS) attacks. Which of the below are viable mitigation techniques? Choose 3 answers", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Dedicated Instances to ensure that each Instance has the maximum performance possible.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Add alerts to Amazon CloudWatch to look for high Network In and CPU utilization.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create processes and capabilities to quickly add and remove rules to the instance OS firewall.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use an Elastic Load Balancer with auto scaling groups at the web, app, and Amazon Relational Database Service (RDS) tiers.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Use an Amazon CloudFront distribution for both static and dynamic content.", "IsAnswer": true },
            { "Id": 1060, "QuestionId": 1010, "Name": "Add multiple elastic network Interfaces (ENIs) to each EC2 instance to Increase the network bandwidth.", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 46,
        "Name": "You currently operate a web application in the AWS US-East region. The application runs on an auto- scaled layer of EC2 instances and an RDS Multi-AZ database. Your IT security compliance officer has tasked you to develop a reliable and durable logging solution to track changes made to your EC2, IAM, and RDS resources. The solution must ensure the integrity and confidentiality of your log data. Which of these solutions would you recommend?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create a new CloudTrail trail with one new S3 bucket to store the logs. Configure SNS to send log file delivery notifications to your management system. Use IAM roles and S3 bucket policies on the S3 bucket that stores your logs.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a new CloudTrail trail with an existing S3 bucket to store the logs and with the global services option selected. Use S3 ACLs and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a new CloudTrail trail with one new S3 bucket to store the logs and with the global services option selected. Use IAM roles, S3 bucket policies, and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create three new CloudTrail trails with three new S3 buckets to store the logs: one for the AWS Management Console, one for AWS SDKs, and one for command line tools. Use IAM roles and S3 bucket policies on the S3 buckets that store your logs.", "IsAnswer": false }]
    } ,
     {
        "Id": 47,
        "Name": "You have an application running on an EC2 instance which will allow users to download files from a private S3 bucket using a pre-signed URL. Before generating the URL, the application should verify the existence of the file in S3. How should the application use AWS credentials to access the S3 bucket securely?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use the AWS account access keys; the application retrieves the credentials from the source code of the application.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create an IAM role for EC2 that allows list access to objects In the S3 bucket; launch the Instance with the role, and retrieve the role's credentials from the EC2 instance metadata.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM user for the application with permissions that allow list access to the S3 bucket; the application retrieves the IAM user credentials from a temporary directory with permissions that allow read access only to the Application user.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an IAM user for the application with permissions that allow list access to the S3 bucket; launch the instance as the IAM user, and retrieve the IAM user's credentials from the EC2 instance user data.", "IsAnswer": false }],
            "Explanation": "Best practices are to always use IAM Roles with EC2 instances. See link for more info",
            "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html"
    } 
    ,
     {
        "Id": 48,
        "Name": "A benefits enrollment company is hosting a 3-tier web application running in a VPC on AWS which includes a NAT (Network Address Translation) instance in the public Web tier. There is enough provisioned capacity for the expected workload for the new fiscal year benefit enrollment period plus some extra overhead. Enrollment proceeds nicely for a few days and then the web tier becomes unresponsive. Upon investigation using CloudWatch and other monitoring tools it is discovered that there is an extremely large and unanticipated amount of inbound traffic coming from a set of 15 specific IP addresses over port 80 from a country where the benefits company has no customers. The web tier instances are so overloaded that benefit enrollment administrators cannot even SSH into them. Which activity would be useful in defending against this attack?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Change the EIP (Elastic IP Address) of the NAT instance in the Web tier subnet and update the Main Route Table with the new EIP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create 15 Security Group rules to block the attacking IP addresses over port 80", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a custom route table associated with the Web tier and block the attacking IP addresses from the IGW (Internet Gateway)", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an inbound NACL (Network Access Control List) associated with the Web tier subnet with deny rules to block the attacking IP addresses", "IsAnswer": true }],
            "Explanation":"See link for more info",
            "Ref":"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_NACLs.html"
    } 
    ,
     {
        "Id": 49,
        "Name": "You are designing an SSL/TLS solution that requires HTTPS clients to be authenticated by the Web server using client certificate authentication. The solution must be resilient. Which of the following options would you consider for configuring the Web server infrastructure? Choose 2 answers", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure your Web servers as the origins for a CloudFront distribution. Use custom SSL certificates on your CloudFront distribution.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure ELB with TCP listeners on TCP/443, and place the Web servers behind it.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure your Web servers with EIPs. Place the Web servers in a Route53 Record Set, and configure health checks against all Web servers.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure ELB with HTTPS listeners, and place the Web servers behind it.", "IsAnswer": true }],
            "Explanation":"TCP/443 or HTTPS listener either way you can configure, but you can only upload ssl certificate on HTTPS listener."
    } 
    ,
     {
        "Id": 51,
        "Name": "Your company has recently extended its datacenter into a VPC on AWS to add burst computing capacity as needed. Members of your Network Operations Center need to be able to go to the AWS Management Console and administer Amazon EC2 instances as necessary. You don't want to create new IAM users for each NOC member and make those users sign in again to the AWS Management Console. Which option below will meet the needs for your NOC members?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use your on-premises SAML 2.0-compliant identity provider (IdP) to grant the NOC members federated access to the AWS Management Console via the AWS single sign-on (SSO) endpoint.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use Web Identity Federation to retrieve AWS temporary security credentials to enable your NOC members to sign in to the AWS Management Console.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use your on-premises SAML 2.0-compllant identity provider (IdP) to retrieve temporary security credentials to enable NOC members to sign in to the AWS Management Console.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use OAuth 2.0 to retrieve temporary AWS security credentials to enable your NOC members to sign in to the AWS Management Console.", "IsAnswer": false }],
            "Explanation":"Use SAML 2.0 for Single Sigon. See link for more information",
            "Ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html"
    } 
    ,
     {
        "Id": 52,
        "Name": "Your fortune 500 company has under taken a TCO analysis evaluating the use of Amazon S3 versus acquiring more hardware. The outcome was that all employees would be granted access to use Amazon S3 for storage of their personal documents. Which of the following will you need to consider so you can set up a solution that incorporates single sign-on from your corporate AD or LDAP directory and restricts access for each user to a designated user folder in a bucket? Choose 3 answers", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using AWS Security Token Service to generate temporary tokens.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Setting up a matching IAM user for every user in your corporate directory that needs access to a folder in the bucket.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Tagging each folder in the bucket.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configuring an IAM role.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Setting up a federation proxy or identity provider.", "IsAnswer": true }]
    } ,
     {
        "Id": 53,
        "Name": "An administrator is using Amazon CloudFormation to deploy a three tier web application that consists of a web tier and application tier that will utilize Amazon DynamoDB for storage. When creating the CloudFormation template which of the following would allow the application Instance access to the DynamoDB tables without exposing API credentials?", 
        "Tag":"Deployment, Security, N/w?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an Identity and Access Management Role that has the required permissions to read and write from the .required DynamoDB table and associate the Role to the application instances by referencing an instance profile.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the Parameter section in the CloudFormation template to have the user input Access and Secret keys from an already created IAM user that has the permissions required to read and write from the required DynamoDB table.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an Identity and Access Management user in the CloudFormation template that has permissions to read and write from the required DynamoDB table, use the GetAtt function to retrieve the Access and Secret keys and pass them to the application instance through user-data.", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 54,
        "Name": "What is the maximum write throughput that can be provisioned for a single Dynamic DB table?", 
        "Tag":"Data",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1,000 write capacity units", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "100,000 write capacity units", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Dynamic DB is designed to scale without limits, but if you go beyond 10,000 you have to contact AWS first.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "10,000 write capacity units", "IsAnswer": false }],
            "Explanation":"See link for more info",
            "Ref":"https://aws.amazon.com/dynamodb/faqs/"
    } 
    ,
     {
        "Id": 55,
        "Name": "An AWS customer is deploying an application that is composed of an AutoScaling group of EC2 instances. The customers security policy requires that every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated using a unique X.509 certificate that contains the specific Instance-id. In addition, all X.509 certificates must be signed by the customer's key management service in order to be trusted for authentication. Which of the following configurations will support these requirements:", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure the Auto Scaling group to launch instances with this role. Have the instances bootstrap get the certificate from Amazon S3 upon first boot.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the key management service generate a signed certificate and send it directly to the newly launched instance.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Embed a certificate into the Amazon Machine Image that is used by the Auto Scaling group. Have the launched instances generate a certificate signature request with the Instance's assigned instance-id to the key management service for signature.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure the launched instances to generate a new certificate upon first boot. Have the key management service poll the AutoScaling group for associated instances and send new instances a certificate signature that contains the specific Instance-id.", "IsAnswer": false }]
    } ,
     {
        "Id": 56,
        "Name": "You are looking to migrate your Development (Dev) and Test environments to AWS. You have decided to use separate AWS accounts to host each environment. You plan to link each account's bill to a Master AWS account using Consolidated Billing. To make sure you keep within budget you would like to implement a way for administrators in the Master account to have access to stop, delete and/or terminate resources in both the Dev and Test accounts. Identify which option will allow you to achieve this goal.", 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create IAM users in the Master account with full Admin permissions. Create cross-account roles in the Dev and Test accounts that grant the Master account access to the resources in the account by inheriting permissions from the Master account.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create IAM users and a cross-account role in the Master account that grants full Admin permissions to the Dev and Test accounts.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Link the accounts using Consolidated Billing. This will give IAM Users in the Master account access to resources in the Dev and Test accounts.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create IAM users in the Master account. Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant the Master account access.", "IsAnswer": true }],
            "Explanation":"See link for more info",
            "Ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html"
    } 
    ,
     {
        "Id": 57,
        "Name": "You are migrating a legacy client-server application to AWS. The application responds to a specific DNS domain (e.g. www.example.com) and has a 2-tier architecture, with multiple application servers and a database server. Remote clients use TCP to connect to the application servers. The application servers need to know the IP address of the clients in order to function properly and are currently taking that information from the TCP socket. A Multi-AZ RDS MySQL instance will be used for the database. During the migration you can change the application code, but you have to file a change request. How would you implement the architecture on AWS in order to maximize scalability and high availability?", 
        "Tag":"HA, Scalability, Cloud Mugration",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "File a change request to implement Alias Resource support in the application. Use Route 53 Alias Resource Record to distribute load on two application servers in different AZs.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "File a change request to implement Latency Based Routing support in the application. Use Route 53 with Latency Based Routing enabled to distribute load on two application servers in different AZs.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "File a change request to implement Cross-Zone support in the application. Use an ELB with a TCP Listener and Cross-Zone Load Balancing enabled, two application servers in different AZs.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "File a change request to implement Proxy Protocol support in the application. Use an ELB with a TCP Listener and Proxy Protocol enabled to distribute load on two application servers in different AZs.", "IsAnswer": true}],
            "Explanation":"See link for more info",
            "Ref":"https://aws.amazon.com/blogs/aws/elastic-load-balancing-adds-support-for-proxy-protocol/"
    } 
    ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } 
    ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } ,
     {
        "Id": 2,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]
    } 
    
     
     
  
    ]
}


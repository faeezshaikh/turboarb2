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


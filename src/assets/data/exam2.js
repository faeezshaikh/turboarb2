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
    } ,
     {
        "Id": 36,
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
        "Id": 37,
        "Name": "A corporate web application is deployed within an Amazon Virtual Private Cloud (VPC), and is connected to the corporate data center via an IPsec VPN. The application must authenticate against the on- premises LDAP server. After authentication, each logged-in user can only access an Amazon Simple Storage Space (S3) keyspace specific to that user. Which two approaches can satisfy these objectives? Choose 2 answers", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The application authenticates against IAM Security Token Service using the LDAP credentials. The application uses those temporary AWS security credentials to access the appropriate S3 bucket.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Develop an identity broker that authenticates against LDAP, and then calls IAM Security Token Service to get IAM federated user credentials. The application calls the Identity broker to get IAM federated user credentials with access to the appropriate S3 bucket.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "The application authenticates against LDAP, and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM role. The application can use the temporary credentials to access the appropriate S3 bucket.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "The application authenticates against LDAP. The application then calls the AWS Identity and Access Management (IAM) Security Service to log in to IAM using the LDAP credentials. The application can use the IAM temporary credentials to access the appropriate S3 bucket.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Develop an identity broker that authenticates against IAM Security Token Service to assume an IAM role in order to get temporary AWS security credentials. The application calls the identity broker to get AWS temporary security credentials with access to the appropriate S3 bucket.", "IsAnswer": false }],
            "Explanation":"Imagine that in your organization, you want to provide a way for users to copy data from their computers to a backup folder. You build an application that users can run on their computers. On the back end, the application reads and writes objects in an S3 bucket. Users don’t have direct access to AWS. Instead, the application communicates with an identity provider (IdP) to authenticate the user. The IdP gets the user information from your organization’s identity store (such as an LDAP directory) and then generates a SAML assertion that includes authentication and authorization information about that user. The application then uses that assertion to make a call to the AssumeRoleWithSAML API to get temporary security credentials. The app can then use those credentials to access a folder in the S3 bucket that’s specific to the user.",
            "Ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html"
    } ,
     {
        "Id": 38,
        "Name": "You are designing a multi-platform web application for AWS. The application will run on EC2 instances and will be accessed from PCs, tablets and smart phones, supported accessing platforms are Windows, MacOS, IOS and Android. Separate sticky session and SSL certificate setups are required for different platform types. Which of the following describes the most cost effective and performance efficient architecture setup?", 
        "Tag":"Deployment, Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Setup a hybrid architecture to handle session state and SSL certificates on-prem and separate EC2 Instance groups running web applications for different platform types running in a VPC.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set up one ELB for all platforms to distribute load among multiple instance under it. Each EC2 instance implements all functionality for a particular platform.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Assign multiple ELBs to an EC2 Instance or group of EC2 instances running the common components of the web application. One ELB for each platform type. Session stickiness and SSL termination are done at the ELBs.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Set up two ELBs. The first ELB handles SSL certificates for all platforms and the second ELB handles session stickiness for all platforms. For each ELB, run separate EC2 instance groups to handle the web application for each platform.", "IsAnswer": false }],
        "Explanation":"One ELB cannot handle different SSL certificates but since we are using sticky sessions it must be handled at the ELB level. SSL could be handled on the EC2 instances only with TCP configured ELB, ELB supports sticky sessions only in HTTP/HTTPS configurations. The way the Elastic Load Balancer does session stickiness is on a HTTP/HTTPS listener is by utilizing an HTTP cookie. If SSL traffic is not terminated on the Elastic Load Balancer and is terminated on the back-end instance, the Elastic Load Balancer has no visibility into the HTTP headers and therefore can not set or read any of the HTTP headers being passed back and forth.",
        "Ref":"http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-sticky- sessions.html"
    } 
    ,
     {
        "Id": 39,
        "Name": "You are tasked with moving a legacy application from a virtual machine running inside your datacenter to an Amazon VPC. Unfortunately, this app requires access to a number of on- premises services and no one who configured the app still works for your company. Even worse, there's no documentation for it. What will allow the application running inside the VPC to reach back and access its internal dependencies without being reconfigured? Choose 3 answers", 
        "Tag":"CloudMigration",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A VM Import of the current virtual machine.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "An Internet Gateway to allow a VPN connection.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Entries in Amazon Route 53 that allow the Instance to resolve its dependencies' IP addresses", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "An IP address space that does not conflict with the one on-premises", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "An Elastic IP address on the VPC instance", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "An AWS Direct Connect link between the VPC and the network housing the internal services", "IsAnswer": true }]
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
    } ,
     {
        "Id": 41,
        "Name": "You are designing an intrusion detection/prevention (IDS/IPS) solution for a customer web application in a single VPC. You are considering the options for Implementing IDS/IPS protection for traffic coming from the Internet. Which of the following options would you consider? Choose 2 answers", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Implement IDS/IPS agents on each instance running in VPC.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Implement Elastic Load Balancing with SSL listeners in front of the web applications.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Implement a reverse proxy layer in front of web servers, and configure IDS/IPS agents on each reverse proxy server.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure an instance in each subnet to switch its network interface card to promiscuous mode and analyze network traffic.", "IsAnswer": false }],
            "Explanation":"EC2 does not allow promiscuous mode, and you cannot put something in between the ELB and the web server (like a listener or IDP)"
    } 
    ,
     {
        "Id": 42,
        "Name": "An enterprise wants to use a third-party SaaS application. The SaaS application needs to have access to issue several API commands to discover Amazon EC2 resources running within the enterprise's account. The enterprise has internal security policies that require any outside access to their environment must conform to the principles of least privilege, and there must be controls in place to ensure that the credentials used by the SaaS vendor cannot be used by any other third party. Which of the following would meet all of these conditions:", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an IAM role for cross-account access, allow the SaaS provider's account to assume the role, and assign it a policy that allows only the actions required by the SaaS application.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "From the AWS Management Console navigate to the Security Credentials page and retrieve the access and secret key for your account.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM role for EC2 instances, assign it a policy that allows only the actions required for the SaaS application to work, provide the role ARN to the SaaS provider to use when launching their application instances.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an IAM user within the enterprise account, assign a user policy to the IAM user that allows only the actions required by the SaaS application, create a new access and secret key for the user and provide these credentials to the SaaS provider.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html"
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
    } ,
     {
        "Id": 44,
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


{
    "quiz": {
        "name": "Exam 3",
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
        "Name": "", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]

    },
      {
        "Id": 13,
        "Name": "", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]

    },
      {
        "Id": 14,
        "Name": "", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]

    },
      {
        "Id": 15,
        "Name": "", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]

    },
      {
        "Id": 16,
        "Name": "", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]

    },
      {
        "Id": 17,
        "Name": "", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]

    },
      {
        "Id": 18,
        "Name": "", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]

    },
      {
        "Id": 19,
        "Name": "", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]

    },
      {
        "Id": 20,
        "Name": "", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }]

    }
    ]
}


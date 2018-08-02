{
    "quiz": {
        "name": "Scalability",
        "logo" : "assets/img/EC2.png",
        "time":"20 minutes",
        "score": 10,
        "sponsor":"Paul Straughn"
    },
    "questions": [{
        "Id": 1,
        "Name": "Which HTTP Methods are cached at a CloudFront edge location? (Choose 3)",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "GET", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "HEAD", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "PUT", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "POST", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "PATCH", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "DELETE", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "OPTIONS", "IsAnswer": true }],
        "Explanation": "PUT, POST, PATCH and DELETE requests are not cached at CloudFront edge locations. OPTIONS can be cached if enabled",
        "Ref": "http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"
    },
    {
        "Id": 2,
        "Name": "ElastiCache with Redis can be scaled horizontally.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation": "Memcached can scale horizontally however Redis cannot."
        
    },
    {
        "Id": 3,
        "Name": "Your startup wants to implement an order fulfillment process for selling a personalized gadget that needs an average of 3-4 days to produce with some orders taking up to 6 months. You expect 10 orders per day on your first day, 1000 orders per day after 6 months and 10,000 orders after 12 months. Orders coming in are checked for consistency, then dispatched to your manufacturing plant for production, quality control, packaging, shipment and payment processing. If the product does not meet the quality standards at any stage of the process, employees may force the process to repeat a step. Customers are notified via email about order status and any critical issues with their orders such as payment failure. Your base architecture includes AWS Elastic Beanstalk for your website with an RDS MySQL instance for customer data and orders. How can you implement the order fulfillment process while making sure that the emails are delivered reliably?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Add a business process management application to your Elastic Beanstalk app servers and reuse the RDS database for tracking order status.Use one of the Elastic Beanstalk instances to send emails to customers..", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use an SQS queue to manage all process tasks. Use an Auto Scaling group of EC2 instances that poll the tasks and execute them. Use SES to send emails to customers.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1. Use SES to send emails to customers.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": " Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1. Use the decider instance to send emails to customers.", "IsAnswer": false }],
        "Explanation": "Use SES for emailing and SWF for managing tasks. Using SQS to manage tasks is not optimal as it cannot maintain state."
        
    },
    {
        "Id": 4,
        "Name": "Server Name Indication allows multiple domains to serve SSL traffic from the same IP address.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
            "Explanation": "See link for details",
            "Ref": "https://aws.amazon.com/cloudfront/faqs/"
        
    },
    {
        "Id": 5,
        "Name": "A website processess credit card payments plans on using CloudFront to to deliver both static and some dynamic content. Which of the following is true a consideration that the company should take into account.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "ClooudFront is not PCI compliant.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudFront does not support delivering any dynamic content.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFront works only with AWS origin servers", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "CloudFront does not cache responses to  PUT requests.", "IsAnswer": true}],
            "Explanation": "CloudFront is PCI compliant, supports delivery of dynamic contant and works with non-AWS origin servers.",
            "Ref": "https://aws.amazon.com/cloudfront/faqs/"
        
    },
    {
        "Id": 6,
        "Name": "You have built a custom mobile application which you want to send push notifications to from your server. What technology can you use to achieve this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon SQS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS SNS", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS SES", "IsAnswer": false }],
            "Explanation": "Amazon SNS Mobile push can be used to send push notifications to your applications using existing push notification protocols.",
            "Ref": "http://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html"
        
    },
    {
        "Id": 7,
        "Name": "You need persistence in your ElastiCache layer, which technology should you choose?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Redis", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Memcached", "IsAnswer": false }]
        
    },
      {
        "Id": 8,
        "Name": "Your startup wants to implement an order fulfillment process for selling a personalized gadget that needs an average of 3-4 days to produce with some orders taking up to 6 months. You expect 10 orders per day on your first day, 1000 orders per day after 6 months and 10,000 orders after 12 months. Orders coming in are checked for consistency, then dispatched to your manufacturing plant for production, quality control, packaging, shipment and payment processing. If the product does not meet the quality standards at any stage of the process, employees may force the process to repeat a step. Customers are notified via email about order status and any critical issues with their orders such as payment failure. Your base architecture includes AWS Elastic Beanstalk for your website with an RDS MySQL instance for customer data and orders. How can you implement the order fulfillment process while making sure that the emails are delivered reliably?", 
        "Tag":"scalability",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Add a business process management application to your Elastic Beanstalk app servers and re- use the RDS database for tracking order status. Use one of the Elastic Beanstalk instances to send emails to customers.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1. Use SES to send emails to customers.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use an SQS queue to manage all process tasks. Use an Auto Scaling group of EC2 instances that poll the tasks and execute them. Use SES to send emails to customers.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1. Use the decider instance to send emails to customers.", "IsAnswer": false }],
            "Explanation":"See linked pdf for more information",
            "Ref":"http://media.amazonwebservices.com/architecturecenter/AWS_ac_ra_ecommerce_checkout_13.pdf"

    },

      {
        "Id": 9,
        "Name": "Your application is using an ELB in front of an Auto Scaling group of web/application servers deployed across two AZs and a Multi-AZ RDS Instance for data persistence. The database CPU is often above 80% usage and 90% of I/O operations on the database are reads. To improve performance you recently added a single-node Memcached ElastiCache Cluster to cache frequent DB query results. In the next weeks the overall workload is expected to grow by 30%. Do you need to change anything in the architecture to maintain the high availability of the application with the anticipated additional load? Why?", 
        "Tag":"scalability",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes, you should deploy two Memcached ElastiCache Clusters in different AZs because the RDS instance will not be able to handle the load if the cache node fails.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "No, if the cache node fails you can always get the same data from the DB without having any availability impact.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "No, if the cache node fails the automated ElastiCache node recovery feature will prevent any availability impact.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Yes, you should deploy the Memcached ElastiCache Cluster with two nodes in the same AZ as the RDS DB master instance to handle the load if one cache node fails.", "IsAnswer": false }],
            "Explanation":"A single-node Memcached ElastiCache cluster failure is nothing but a total failure. (Even though AWS will automatically recover the failed node, there are no other nodes in the cluster).To mitigate the impact of a node failure, spread your cached data over more nodes. Because Memcached does not support replication, a node failure will always result in some data loss from your cluster. When you create your Memcached cluster you can create it with 1 to 20 nodes, or more by special request. Partitioning your data across a greater number of nodes means you’ll lose less data if a node fails. For example, if you partition your data across 10 nodes, any single node stores approximately 10% of your cached data. In this case, a node failure loses approximately 10% of your cache which needs to be replaced when a replacement node is created and provisioned. To mitigate the impact of an availability zone failure, locate your nodes in as many availability zones as possible. In the unlikely event of an AZ failure, you will lose only the data cached in that AZ, not the data cached in the other AZs.",
            "Ref":"http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/BestPractices.html"

    },
     {
        "Id": 10,
        "Name": "Your company is in the process of developing a next generation pet collar that collects biometric information to assist families with promoting healthy lifestyles for their pets. Each collar will push 30kb of biometric data in JSON format every 2 seconds to a collection platform that will process and analyze the data providing health trending information back to the pet owners and veterinarians via a web portal. Management has tasked you to architect the collection platform ensuring the following requirements are met:  1) Provide the ability for real-time analytics of the inbound biometric data 2) Ensure processing of the biometric data is highly durable, elastic and parallel 3) The results of the analytic processing should be persisted for data mining. Which architecture outlined below will meet the initial requirements for the collection platform?", 
        "Tag":"scalability",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Utilize Amazon Kinesis to collect the inbound sensor data, analyze the data with Kinesis clients and save the results to a Redshift cluster using EMR.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Utilize SQS to collect the inbound sensor data, analyze the data from SQS with Amazon Kinesis and save the results to a Microsoft SQL Server RDS Instance.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Utilize S3 to collect the inbound sensor data, analyze the data from S3 with a daily scheduled Data Pipeline and save the results to a Redshift Cluster.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Utilize EMR to collect the inbound sensor data, analyze the data from EMR with Amazon Kinesis and save the results to DynamoDB.", "IsAnswer": false }]
    } 
     ]
}
{
    "quiz": {
        "name": "Scalability",
        "logo" : "assets/img/EC2.png"
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
        
    }
     ]
}
{
    "quiz": {
        "name": "Cloud Migration",
        "logo" : "assets/img/CloudFormation.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "A user can use Storage gateway to migrate the virtual machine data to AWS.",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 2,
        "Name": "The biggest range of IP address (CIDR block) that can be created in a AWS VPC is:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "/14", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "/16", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "/24", "IsAnswer": false }]
        
    },
    {
        "Id": 3,
        "Name": "Amazon reserves these many IP Address in a subnet.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "5", "IsAnswer": true }],
        "Explanation": "AWS reserves the FIRST four addresses and LAST one address of the CIDR block. A CIDR block does not always start at 0 or end at 255. Work with the CIDR calculator to see how this works. http://www.subnet-calculator.com/cidr.php",
        "Ref":"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html"    
    },
    {
        "Id": 4,
        "Name": "While using VMWare vCentre, what option is available to you to start migrating to AWS?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "EC2", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "HyperV", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "vCentre AWS plugin", "IsAnswer": true }],
        "Explanation": "See link for further information",
        "Ref":"https://aws.amazon.com/ec2/vcenter-portal/"   
        
    },
    {
        "Id": 5,
        "Name": "AWS Data Pipeline can be used for: (Choose 3):", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Promote code through the Codepipeline service.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a CI/CD Pipeline.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Run SQL Queries", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Run Shell Scripts", "IsAnswer": true},
            { "Id": 1059, "QuestionId": 1010, "Name": "Copy files", "IsAnswer": true}]
        
    },
    {
        "Id": 6,
        "Name": "The smalled CIDR block you can have in AWS is:", 
        
        "Options": [
              { "Id": 1055, "QuestionId": 1010, "Name": "/16", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "/24", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "/28", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "/29", "IsAnswer": false }],
        "Explanation": "See link for further information",
        "Ref":"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html"   
        
    },
    {
        "Id": 7,
        "Name": "Which of the following are standard preconditions in AWS Datapipeline? (Choose 3)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDBDataExists", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "ShellCommandPrecondition", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3KeyDoesNotExist", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3PrefixExists", "IsAnswer": true }],
        "Explanation": "AWS Data Pipeline provides built-in support for the following preconditions: DynamoDBDataExists,DynamoDBTableExists,S3KeyExists,S3PrefixExists,ShellCommandPrecondition",
        "Ref":"https://aws.amazon.com/datapipeline/faqs/"   
        
    },
    {
        "Id": 8,
        "Name": "A company is using Volume Gateway to migrate on-prem data to AWS. However when the admin checks the console, he cannot see the volume data in S3. What could be the right explanation for this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Volume Gateway requires AWS Direct Connect for backing up data to AWS. The company has to use AWS Direct Connect for this to work", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Volume Gateway needs to have a target bucket defined in S3. The admin should verify if the bucket was correctly configured. ", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Your volumes are stored in Amazon S3 and accessible through AWS Storage Gateway. You cannot directly access them by using Amazon S3 API actions. ", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "The compnay should be using Tape Gateway to migrate the on-prem data to AWS", "IsAnswer": false }],
        "Explanation": "Your volumes are stored in Amazon S3 and accessible through AWS Storage Gateway. You cannot directly access them by using Amazon S3 API actions. You can take point-in-time snapshots of gateway volumes that are made available in the form of Amazon EBS snapshots. Use the file interface to work with your data natively in S3.",
        "Ref":"https://aws.amazon.com/storagegateway/faqs/"  
    }
     ]
}
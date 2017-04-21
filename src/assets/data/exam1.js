{
    "quiz": {
        "name": "Exam 1",
        "logo" : "assets/img/EC2.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "Which of the following AWS technologies can be used to mitigate against DDoS (Choose 2)",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "CloudFront", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "EC2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudTrail", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Route53", "IsAnswer": true }]
    },
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
        "Id": 12,
        "Name": "For which of the following is CloudWatch a good fit? (Choose 3)",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Audit AWS API Calls", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Collect logs from AWS resources", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Monitor AWS resources across multiple AWS accounts", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Monitor CloudTrail", "IsAnswer": true }]
    },
    {
        "Id": 13,
        "Name": "For intrusion detection and prevention, you should use:",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "An IDS", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "An IPS", "IsAnswer": true }],
            "Explanation":"An Intrusion Prevention System will detect AND prevent attacks, where as an Intrusion Detection System will only detect intrusions and alert about them."
    },
    {
        "Id": 14,
        "Name": "Which of the following measure should you take to mitigate against web application DDoS attacks?",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Switch to a backup web server when the attack occurs.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Include a WAF as part of your network infrastructure.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Run multiple instances under different domain names and redirect traffic to the second instance when traffic exeeds capacity on the first instance.", "IsAnswer": false }],
            "Explanation":"A WAF should be used",
            "Ref":"https://d0.awsstatic.com/whitepapers/DDoS_White_Paper_June2015.pdf"
    },
    {
        "Id": 15,
        "Name": "Which of the following describes a Layer 7 attack?",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "When the attacker sends a flood of requests to a target server from multiple machines.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "When the attacker sends a spoofed target return address to an NTP server which responds with large amounts of information.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "When the attacker spoofs the address of an NTP server causing the target to reach a malicious NTP server.", "IsAnswer": false }],
            "Explanation":"Its a flood of requests sent to a target server from multiple machines.",
            "Ref":"https://d0.awsstatic.com/whitepapers/DDoS_White_Paper_June2015.pdf"
    },
    {
        "Id": 15,
        "Name": "Which of the following best describes an Identity Store?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Combining or joining a list of users in one domain to users in another domain", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "A service which takes a user from point A and joins it to a user at point B", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A service like Active Directory, Amazon, Google etc.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A user of a service such as Google", "IsAnswer": true }]
    },
    {
        "Id": 16,
        "Name": "AWS Security Token Service returns what values upon request for a federated token? (Choose 4)",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Access Key ID.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Secret Access Key.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A Token", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "A duration.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "An IAM Role.", "IsAnswer": false }]
    },
    {
        "Id": 17,
        "Name": "To integrate an existing Microsoft Active Directory environment with AWS you can use:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AD Connector", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Simple AD", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Cognito", "IsAnswer": false }]
        
    }
     ]
}
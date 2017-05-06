
      ///////// Security

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
        "Id": 5,
        "Name": "Which operation should you call to request temporary security credentials from the AWS platform when federating with Active Directory", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "GetRoleWithSAML", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AssumeRoleWithSAML", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AssumeRole", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "SAMLObtainRole", "IsAnswer": false}]
        
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
        "Id": 8,
        "Name": "Your EC2 instance needs to access the image files in your S3 bucket. What is the best way to arrange access for this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use CLI and save the security id and key in an encrypted file under the /etc folder on your EC2 instance", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Write a java client using the AWS Java SDK and access the security id and key from a properties file stored under the /etc folder", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM role that has full access to S3 and assign this role to the EC2 instance", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "An EC2 instance cannot access files in a S3 bucket", "IsAnswer": false }]
    },


    /////////
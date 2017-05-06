{
    "quiz": {
        "name": "Deployment",
        "logo" : "assets/img/SNS.png"
    },
    "questions": [
      {
        "Id": 1,
        "Name": "Refer to the architecture diagram below of a batch processing solution using Simple Queue Service (SQS) to set up a message queue between EC2 instances which are used as batch processors. CloudWatch monitors the number of job requests (queued messages) and an Auto Scaling group adds or deletes batch servers automatically based on parameters set in CloudWatch alarms. You can use this architecture to implement which of the following features in a cost effective and efficient manner?", 
        "Pic":"assets/img/ques2.png",
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Coordinate number of EC2 instances with number of Job requests automatically, thus improving cost effectiveness.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Reduce the overall time for executing Jobs through parallel processing by allowing a busy EC2 instance that receives a message to pass it to the next instance in a daisy-chain setup.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Implement fault tolerance against EC2 instance failure since messages would remain in SQS and work can continue with recovery of EC2 instances. Implement fault tolerance against SQS failure by backing up messages to S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Handle high priority Jobs before lower priority Jobs by assigning a priority metadata field to SQS messages.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Implement message passing between EC2 instances within a batch by exchanging messages through SQS.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"https://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/as-using-sqs-queue.html"

    }   ,
     
      {
        "Id": 15,
        "Name": "Your system recently experienced down time. During the troubleshooting process you found that a new administrator mistakenly terminated several production EC2 instances. Which of the following strategies will help prevent a similar situation in the future? The administrator still must be able to: 1) launch, start, stop, and terminate development resources, 2) launch and start production instances.", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Leverage EC2 termination protection and multi-factor authentication, which together require users to authenticate before terminating EC2 instances.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Leverage resource based tagging, along with an IAM user which can prevent specific users from terminating production EC2 resources.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM user which is not allowed to terminate instances by leveraging production EC2 termination protection.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an IAM user and apply an IAM role which prevents users from terminating production EC2 instances.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"http://blogs.aws.amazon.com/security/post/Tx29HCT3ABL7LP3/Resource-level-Permissions-for- EC2-Controlling-Management-Access-on-Specific-Ins"


    }
     ]
}
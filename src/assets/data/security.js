{
    "quiz": {
        "name": "Security",
        "logo" : "assets/img/IAM.png"
    },
    "questions": [ {
        "Id": 1,
        "Name": "With regard to IAM, which of the following best describes a Group?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A collection of AWS accounts", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "It's the group of EC2 machines that gain the permissions specified in the Group.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "There's no Group in IAM, but only Users and Resources.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A collection of users.", "IsAnswer": true }],
            "Explanation":"Use groups to assign permissions to IAM users Instead of defining permissions for individual IAM users, it’s usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.), define the relevant permissions for each group, and then assign IAM users to those groups. All the users in an IAM group inherit the permissions assigned to the group. That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can simply change what IAM group their IAM user belongs to.",
            "Ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#use-groups-for- permissions"
    }
     ]
}
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
    },
      {
        "Id": 2,
        "Name": "A web company is looking to implement an intrusion detection and prevention system into their deployed VPC. This platform should have the ability to scale to thousands of instances running inside of the VPC. How should they architect their solution to achieve these goals?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure each host with an agent that collects all network traffic and sends that traffic to the IDS/IPS platform for inspection.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure an instance with monitoring software and the elastic network interface (ENI) set to promiscuous mode packet sniffing to see all traffic across the VPC.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a second VPC and route all traffic from the primary application VPC through the second VPC where the scalable virtualized IDS/IPS platform resides.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure servers running in the VPC using the host-based 'route' commands to send all traffic through the platform to a scalable virtualized IDS/IPS.", "IsAnswer": false }]

    } 
     ]
}
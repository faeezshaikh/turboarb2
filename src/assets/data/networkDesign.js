{
    "quiz": {
        "name": "Network Design",
        "logo" : "assets/img/SQS.png"
    },
    "questions": [ {
        "Id": 1,
        "Name": "You are designing the network infrastructure for an application server in Amazon VPC. Users will access all the application instances from the Internet, as well as from an on-premises network. The on-premises network is connected to your VPC over an AWS Direct Connect link. How would you design routing to meet the above requirements?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure a single routing table with a default route via the Internet gateway. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure a single routing table with a default route via the Internet gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure two routing tables: one that has a default route via the Internet gateway, and another that has a default route via the VPN gateway. Associate both routing tables with each VPC subnet.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure a single routing table with two default routes: one to the Internet via an Internet gateway, the other to the on-premises network via the VPN gateway. Use this routing table across all subnets in your VPC.", "IsAnswer": false }]
    },
      {
        "Id": 2,
        "Name": "Amazon EC2 provides a repository of public data sets that can be seamlessly integrated into AWS cloud-based applications. What is the monthly charge for using the public data sets?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A 1 time charge of 10$ for all the datasets.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1$ per dataset per month", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10$ per month for all the datasets", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "There is no charge for using the public data sets", "IsAnswer": true}]

    }
     ]
}
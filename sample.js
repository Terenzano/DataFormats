myObj = {"Addresses" :[
    {
      "ip": "172.16.0.2",
      "netmask": "255.255.255.0",
      "Active": false
    },
    {
      "ip": "172.16.0.3",
      "netmask": "255.255.255.0",
      "Active": true
    },
    {
      "ip": "172.16.0.4",
      "netmask": "255.255.255.0",
      "Active": false
    }

]
}

console.log(typeof myObj.Addresses[1].Active);




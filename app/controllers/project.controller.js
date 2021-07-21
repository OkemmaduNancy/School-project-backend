const miio = require("miio");

exports.discover = (req, res) => {
    const devices = miio.browse({
  cacheTime: 300 // 5 minutes. Default is 1800 seconds (30 minutes)
});

    devices.on('unavailable', (device) => {
        if (device.matches("placeholder")) {
            return res.status(404).send({ 
                message: "This device is either missing a token or could not connect to", device})
        }
         else {
            console.log("herer 2", device);
            // Switch the power of the device
            device.togglePower()
                .then((on) => {
                    return res.send({message: "power is", on})
                })
                // console.log('Power is now', on)
                .catch((err) => {
                    return res.status(500).send({
                        message: err
                    })
                })
        }
    })
    res.send({message:"could not connect to device"})
   
}
exports.fan = (req, res) => {
    miio.device({ address: "192.168.43.15" })
        .then((device) => {
            return res.send({ "connected to": device })
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message
            })
        })

}
exports.television = (req, res) => {
    miio.device({ address: "192.168.43.15" })
    .then((device) => {
        return res.send({ "connected to": device })
    })
    .catch((err) => {
        return res.status(500).send({
            message: err.message
        })
    })
}
exports.freezer = (req, res) => {
    miio.device({ address: "192.168.43.15" })
    .then((device) => {
        return res.send({ "connected to": device })
    })
    .catch((err) => {
        return res.status(500).send({
            message: err.message
        })
    })
}
exports.bulb = (req, res) => {
    miio.device({ address: "192.168.43.15" })
    .then((device) => {
        return res.send({ "connected to": device })
    })
    .catch((err) => {
        return res.status(500).send({
            message: err.message
        })
    })
}
exports.findAllProject = (req, res) => {
            res.send({ message: "Hello World!" });

        
}
---
id: tasmota
title: Tasmota
sidebar_label: Tasmota
---

Tasmota is an open source firmware for ESP8266 devices.

To connect them to Gladys:

- flash your device with Tamosta firmware
- configure it
- go to `Integrations / Tasmota` in Gladys

## Flash with Tasmota firmware

Follow instructions on <a href="https://tasmota.github.io/docs/Getting-Started/" target="_blank">Tasmota installation user guide</a>.

There are many firmware installation guides online, depending on the device. You will be able to find the right guide for your device by browsing through the search results.

## Configure device

Once flashed with new firmare, go to the device web page and configure MQTT as describe at <a href="https://tasmota.github.io/docs/MQTT/" target="_blank">Tasmota MQTT configuration</a>.

Enter your MQTT broken information and fill the <i>Topic</i> field with the expected unique device identifier.

Click on `Configuration`.



Click on `Configure MQTT` menu.



Then fill configuration form with your information:

- `Host` : MQTT broker URL
- `Port` : MQTT broker port
- `User` : user to connect to MOQTT broker
- `Password` : password to connect to MQTT broker



## Add the device to Gladys

Once saved, go back to Gladys:

1. to `Integration -> Tasmota` page
2. select `MQTT discover` menu
3. click on `Scan`button (if device is not already listed)
4. then `Save`
5. and voilà!

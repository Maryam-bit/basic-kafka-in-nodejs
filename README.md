# Kafka Basic Integration with JavaScript

This project demonstrates basic integration of Apache Kafka with a JavaScript application using the `kafkajs` library.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Docker
* Node.js

### Installation

1. **Clone the repository:**

```
git clone [<repository_url>](https://github.com/Maryam-bit/basic-kafka-in-nodejs)
cd basic-kafka-in-nodejs
```

2. Install Node.js dependencies:

```
npm install
```

## Running Locally

### Step 1: Start Zookeeper and Kafka

Start the Zookeeper and Kafka services using Docker Compose:

```
docker-compose up -d
```

### Step 2: Create a Topic

Run the `admin.js` script to create the necessary topic:

```
node admin.js
```

### Step 3: Run Multiple Consumers

Run one or more consumers by executing the `consumer.js` script with a group name:

```
node consumer.js <GROUP_NAME>
```

### Step 4: Run the Producer and Send Messages

Run the `producer.js` script and send messages:

```
node producer.js
> tony south
> tony north
```

Ensure messages are received in the consumer terminal(s) as you send them from the producer.



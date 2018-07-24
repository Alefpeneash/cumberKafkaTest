Feature: Kafka

  Kafka

  @tag1
  Scenario: Fetch message
    Given the producer and consumer
    
    Then The producer sends 5 messages "test" and consumer fetches 5 messages "test1"
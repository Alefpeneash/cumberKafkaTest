Feature: Kafka

  Kafka

  @tag1
  Scenario: Fetch message
    Given the producer and consumer
    
    Then the consumer fetches message "test1" "test1"

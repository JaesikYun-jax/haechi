import { expect, test, describe } from "bun:test";

interface Greeting {
  message: string;
  timestamp: Date;
}

function createGreeting(name: string): Greeting {
  return {
    message: `Hello ${name}, welcome to your Bun + TypeScript project!`,
    timestamp: new Date()
  };
}

describe('Greeting Tests', () => {
  test('createGreeting returns correct message', () => {
    const name = 'Test User';
    const greeting = createGreeting(name);
    
    expect(greeting.message).toBe(`Hello ${name}, welcome to your Bun + TypeScript project!`);
    expect(greeting.timestamp).toBeInstanceOf(Date);
  });
}); 
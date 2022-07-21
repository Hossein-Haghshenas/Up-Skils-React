<h1 align="center">Snapshot Testing</h1>

## What's Snapshot Testing ?

Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly. A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test.

---

## What's difference between snapshot test and unit test ?

The main difference between snapshot testing and functional/unit tests is, snapshot tests never assert the correct behavior of the application functionality but does an output comparison instead. There are two types of tools that support frontend snapshot testing.

---

## How do you use snapshot testing ?

When writing snapshot tests for a React component, you first need to have code in a working state. Then, generate a snapshot of its expected output given certain data. The snapshot tests are committed alongside the component. Jest, a testing framework, will compare the snapshot to the rendered output for the test.

---

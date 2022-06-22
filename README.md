# vue-test-coverage

This is a simple repro of a jest coverage issue I've run into lately. Coverage shows 100% on all metrics, despite the unit test not testing everything. It looks like the entire component template is considered as one statement; none of the methods are considered.

![image](https://user-images.githubusercontent.com/14936049/174923778-8e55c95f-a776-4754-9d73-9843c9137265.png)

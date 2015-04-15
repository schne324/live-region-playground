# Live Region Playground
## Run manual AT tests or just explore the wild world of live regions!

### Configure a live region by:
- Choosing a specific role and using it's default valus for `aria-live`, `aria-atomic` and `aria-relevant`
- Choosing custom values for `aria-live`, `aria-atomic` and `aria-relevant`

### Content Change
The `div#fixture` is the element which recieves the various attributes. 
You can choose to trigger content change once, every 5 seconds or every 10 seconds. 
If "Every 5 seconds" or "Every 10 seconds" is chosen, content change will alternate between additions and modifications with the exception of content removal every 10th iteration.

(Hint: to manually trigger "removal" content change, click the "Clear added content" button)

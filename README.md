menu_url_destructuring :
res_info (id,name,cuisines ...) :
data.cards[2].card.card.info ()

items_info (only recommended res_items) :
data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

Class based component life-cycle methods :

1. constructor() - called when an instance of the class is created .
2. render() - called after the constructor() used to render jsx.
3. componentDidMount() - called after the compenent is completely mounted onto UI (i.e after render() method). - used generally for api calls.

Mounting : loading the components onto the UI.

- Mounting happens in 2 phases .

i. Render phase : - first constructor() is called - second render() is called

- if a parent have multiple children, react batches the all childern renders into one.(this increases the performance of react app).

ii. Commit phase : - first updates the actual DOM. - second calls the componentDidMount().

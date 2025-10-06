menu_url_destructuring :
res_info (id,name,cuisines ...) :
data.cards[2].card.card.info ()

items_info (only recommended res_items) :
data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

Class based component life-cycle methods :

1. constructor() - called when an instance of the class is created .
2. render() - called after the constructor() used to render jsx.
3. componentDidMount() - called after the compenent is completely mounted onto UI (i.e after render() method). - used generally for api calls.

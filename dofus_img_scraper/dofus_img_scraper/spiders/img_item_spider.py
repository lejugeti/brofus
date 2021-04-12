import scrapy
import cfscrape
from ..items import ImageItem

class ImgSpider(scrapy.Spider):
    name = "dofus"
    
    def start_requests(self):
        start_urls = [
            'https://www.dofus.com/fr/mmorpg/encyclopedie/equipements/14076-coiffe-comte-harebourg'
        ]
        
        for url in start_urls:
            # token, agent = cfscrape.get_tokens(url)
            # yield scrapy.Request(url=url, cookies=token, headers={'User-Agent': agent}, callback=self.parse)
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        urls = []
        item = ImageItem()
        for elem in response.xpath("//img"):
            img_url = elem.xpath("@src").get()
            urls.append('https:' + img_url)
        
        item['image_urls'] = urls
        return item
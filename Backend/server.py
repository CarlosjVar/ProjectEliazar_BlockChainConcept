

from flask import Flask, request
from flask_cors import CORS

import requests
import json
from BlockChain import *

app =  Flask(__name__)
CORS(app)

blockchain = Blockchain()



@app.route('/blockchain/get',methods = ['GET'])
def get_chain():
    chain_data = []
    for block in blockchain.chain:
        chain_data.append(block.__dict__)
    
    return json.dumps({"length": len(chain_data),
                       "chain": chain_data})

@app.route('/blockchain/addTransaction',methods = ['POST'])
def add_block():
    data= json.loads(request.get_data())
    blockchain.add_new_transaction(data)
    blockchain.mine()

    chain_data = []
    for block in blockchain.chain:
        chain_data.append(block.__dict__)

    return json.dumps({"length": len(chain_data),
                       "chain": chain_data})

app.run(debug=True, port=5000)
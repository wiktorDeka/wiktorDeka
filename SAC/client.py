import socket
import sys
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import rsa

# Wczytanie kluczy z plików PEM
def load_key_from_file(filename, is_private=False):
    with open(filename, 'rb') as key_file:
        key_data = key_file.read()
        if is_private:
            return serialization.load_pem_private_key(key_data, password=None)
        else:
            return serialization.load_pem_public_key(key_data)

client_private_key = load_key_from_file('client_private_key.pem', is_private=True)
server_public_key = load_key_from_file('server_public_key.pem')

def client_program():
    host = sys.argv[1]
    port = 5000

    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect((host, port))

    token = "Login request"
    encrypted_token = server_public_key.encrypt(
        token.encode(),
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )
    client_socket.send(encrypted_token)

    encrypted_result = client_socket.recv(1024)
    decrypted_result = client_private_key.decrypt(
        encrypted_result,
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )
    print(decrypted_result.decode())

    client_socket.close()

if __name__ == '__main__':
    client_program()

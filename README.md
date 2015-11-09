# serve

Simple static file server

### Installation
```
git clone https://github.com/victorzki/serve.git
npm install -g
```

### Usage

Serves jade files from current directory
```
serve --jade
```

Following serves content from public/ folder
```
serve -p public/
```

```
Usage: serve [options]

Options:

  -h, --help          output usage information
  -V, --version       output the version number
  -p,  --path [path]  Specify path to serve files from. (Leave empty for current directory)
  -j,  --jade         If to use jade rendering
       --port [port]  Specify port

```

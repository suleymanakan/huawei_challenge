import React from "react";
import {  Card, Row, Col } from "antd";

import InfiniteScroll from "react-infinite-scroller";





export default class CardCoponent extends React.Component {
    
    render(){
        return (
            <InfiniteScroll
              pageStart={0}
              loadMore={this.props.loadMore}
              hasMore={this.props.hasMore}
              initialLoad={false}
              threshold={50}
              loader={
                <h2 className="loader" key={0}>
                  Loading ...
                </h2>
              }
            >
              <Row>
                {this.props.data.map((item, id) => (
                  <Col key={id}
                    span={item.images.fixed_height.width > 300 ? 12 : 6}
                    style={{ marginTop: 30, paddingRight: 10 }}
                  >
                    <Card
                      key={id}
                      hoverable
                      style={{
                        width: item.images.fixed_height.width > 300 ? 500 : 250,
                        border: "0px"
                      }}
                      bodyStyle={{ padding: 0 }}
                    >
                      <img
                        style={{
                          opacity: 0.9,
                          width: item.images.fixed_height.width > 300 ? 500 : 250
                        }}
                        alt="loading..."
                        src={item.images.fixed_height.url}
                        height="300"
                      />
      
                      <div className="textStyle" style={textStyle}>
                        <span>{item.title}</span>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </InfiniteScroll>
          );
    }
  };

  const textStyle = {
    position: "absolute",
    bottom: "0",
    paddingLeft: 5,
    paddingRight: 5,
    color: "#fff",
    fontSize: 22,
    fontWeight: 600,
    backgroundImage: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))"
  };
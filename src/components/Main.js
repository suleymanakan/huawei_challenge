import React from "react";
import { Layout, Input, Button } from "antd";


import logo from "../img/home.png";
import CardCoponent from "./Card";

const { Content } = Layout;
const { Search } = Input;

export default class Main extends React.Component {
  render() {
    return (
      <Layout className="layout" style={{ background: "rgb(18, 18, 18)" }}>
        <div
          style={{
            marginTop: 20,
            marginBottom: 30,
            marginLeft: "10%",
            marginRight: "10%"
          }}
        >
          <img
          alt="image not loading"
            onClick={this.props.homeFunc}
            style={{ width: "5%", height: 40, backgroundColor: "white" }}
            src={logo}
          />
          <Search
            placeholder="Search"
            size="large"
            style={{
              width: "95%",
              borderRadius: 0,
              paddingRight: 0,
              marginRight: 0
            }}
            onSearch={value => this.props.onSearchResultFunc(value)}
            enterButton
          />
        </div>

        <Content style={{ marginLeft: "10%", marginRight: "10%" }}>
          <div
            style={{
              background: "rgb(18, 18, 18)",
              padding: 24,
              minHeight: 280
            }}
          >
            {/* one card component created/*/}
            <CardCoponent
              data={this.props.data}
              hasMore={this.props.hasMore}
              loadMore={this.props.loadMore}
            />
            {this.props.hasMore ? null : this.props.data.length > 0 ? (
              <div
                style={{ marginLeft: "20%", marginRight: "20%", marginTop: 30 }}
              >
                <Button
                  onClick={this.props.loadMoreBtnFunc}
                  type="primary"
                  block
                >
                  Load More
                </Button>
              </div>
            ) : (
              <div
                style={{
                  marginLeft: "20%",
                  marginRight: "20%",
                  marginTop: 30,
                  fontSize: 22,
                  color: "#fff"
                }}
              >
                No GIFs found for {this.props.searchValue}
              </div>
            )}
          </div>
        </Content>
      </Layout>
    );
  }
}
